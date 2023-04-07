import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from "express"
import * as otpGenerator from 'otp-generator';
import { Op } from 'sequelize';
import { AddMinutesToDate } from '../helpers/addMinutes';
import { v4 } from 'uuid';
import { encode, decode, dates } from '../helpers/crypto';
import { User } from './entities/user.entity';
import { UserLoginDto } from './dto/user-login.dto';
import { VerifyOtpDto } from './dto/verifyOtp.dto';
import { PhoneUserDto } from './dto/phone-user.dto';
import { Otp } from '../otp/models/otp.model';
import { CreateUserDto } from './dto/create-user.dto';
import { MailService } from '../mail/mail.service';
export interface Tokens {
  access_token: string;
  refresh_token: string
}


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepo: typeof User,
    @InjectModel(Otp) private otpRepo: typeof Otp,
    private readonly mailService: MailService,
    private readonly jwtService: JwtService,
  ) { }

  async register(createUserDto: CreateUserDto, res: Response) {
    const email = await this.userRepo.findOne({
      where: { email: createUserDto.email }
    });
    if (email) {
      throw new BadRequestException("Email already registered!");
    };
    const exist_phone = await this.userRepo.findOne({
      where: { phone_number: createUserDto.phone_number }
    });
    if (exist_phone) {
      throw new BadRequestException("Phone number already registered!");
    };
    const hashed_password = await bcrypt.hash(createUserDto.password, 7);
    const user = await this.userRepo.create({
      ...createUserDto, hashed_password
    });
    const tokens = await this.generateToken(user);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7)
    const updateUser = await this.userRepo.update(
      { hashed_refresh_token }, { where: { id: user.id }, returning: true }
    );

    // await this.mailService.sendOtpToEmail(updateUser[1][0]);
    console.log(createUserDto);
    return this.writingCookie(tokens, updateUser[1][0], res, 'User registrated successfully');
  }

  async login(loginUserDto: UserLoginDto, res: Response) {
    const { email, password } = loginUserDto;
    const user = await this.userRepo.findOne({ where: { email } });
    if (!user) {
      throw new BadRequestException('User not registered!!');
    };
    console.log('1');

    const isMatchPass = await bcrypt.compare(password, user.hashed_password,);
    if (!isMatchPass) {
      throw new BadRequestException('User not registered(pass)!!');
    };

    const tokens = await this.generateToken(user);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedUser = await this.userRepo.update(
      { hashed_refresh_token: hashed_refresh_token },
      { where: { id: user.id }, returning: true }
    );
    return this.writingCookie(tokens, updatedUser[1][0], res, 'User logged in');
  }

  findAll() {
    return this.userRepo.findAll({ include: { all: true } });
  }

  
  async logout(refreshToken: string, res: Response) {
    const userData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });

    if (!userData) {
      throw new ForbiddenException('User not found');
    };

    const updatedUser = await this.userRepo.update(
      { hashed_refresh_token: null },
      { where: { id: userData.id }, returning: true }
    );

    res.clearCookie('refresh_token');
    const response = {
      message: 'User logged out',
      user: updatedUser[1][0],
    };
    return response;
  }

  async refreshToken(user_id: number, refreshToken: string, res: Response) {
    const decodedToken = this.jwtService.decode(refreshToken);
    if (user_id != decodedToken['id']) {
      throw new BadRequestException('User not found');
    };

    const user = await this.userRepo.findOne({ where: { id: user_id } });
    if (!user || !user.hashed_refresh_token) {
      throw new BadRequestException('User not found');
    };

    const tokenMatch = await bcrypt.compare(refreshToken, user.hashed_refresh_token);
    if (!tokenMatch) {
      throw new ForbiddenException('Forbidden');
    };

    const tokens = await this.generateToken(user);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedUser = await this.userRepo.update(
      { hashed_refresh_token: hashed_refresh_token },
      { where: { id: user.id }, returning: true }
    );
    return this.writingCookie(tokens, updatedUser[1][0], res, 'Token updated');
  }


  private async generateToken(user: User) {
    const jwtPayload = { id: user.id };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME
      }),
    ]);
    return {
      access_token: accessToken,
      refresh_token: refreshToken
    };
  }


  async writingCookie(tokens: Tokens, user: User, res: Response, message: string) {
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true
    });
    const response = {
      message: `${message}`,
      user,
      tokens
    };
    return response;
  }


  async newOtp(phoneUserDto: PhoneUserDto) {
    const phone_number = phoneUserDto.phone;
    const otp = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false
    });

    console.log(otp);

    // const is_send = await this.botService.sendOTP(phone_number, otp);
    // if (!is_send) {
    //   throw new HttpException("Avval botdan ro'yxatdan o'ting", HttpStatus.BAD_REQUEST);
    // };
    const now = new Date();
    const expiration_time = AddMinutesToDate(now, 5);
    await this.otpRepo.destroy({ where: { [Op.and]: [{ check: phone_number }, { verified: false }] } });
    const new_otp = await this.otpRepo.create({ id: v4(), otp, expiration_time, check: phone_number });
    const details = {
      timestamp: now, check: phone_number, success: true, message: "OTP send to user", otp_id: new_otp.id
    };
    const encoded = await encode(JSON.stringify(details));
    return { status: 'Success', Details: encoded };
  }


  async verifyOtp(verifyOtpDto: VerifyOtpDto) {
    const { verification_key, otp, check } = verifyOtpDto;
    const currentdate = new Date();
    const decoded = await decode(verification_key);
    const obj = JSON.parse(decoded);
    const check_obj = obj.check;
    if (check_obj != check)
      throw new BadRequestException('OTP bu raqamga yuborilmagan');
    const result = await this.otpRepo.findOne({ where: { id: obj.otp_id } });
    if (result != null) {
      if (!result.verified) {
        if (dates.compare(result.expiration_time, currentdate)) {
          console.log(result);
          throw new BadRequestException('Otp is not match');
        } else {
          throw new BadRequestException('Otp expired');
        }
      } else {
        throw new BadRequestException('Otp already used');
      }
    } else {
      throw new BadRequestException('User not found');
    }
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne({ where: { id }, include: { all: true } });
    return user;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepo.findOne({
      where: { email },
      include: { all: true }
    });
    return user;
  }

  async remove(id: number) {
    return this.userRepo.destroy({ where: { id } });
  }

  async updateUser(updateUserDto: UpdateUserDto, id: number) {
    const user = await this.userRepo.update({ ...updateUserDto }, { where: { id }, returning: true });
    return user[1][0];
  }
}
