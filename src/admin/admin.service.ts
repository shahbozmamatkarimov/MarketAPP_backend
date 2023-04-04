import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './entities/admin.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private readonly adminRepository: typeof Admin,
    private readonly jwtService: JwtService
  ) { }

  async create(createAdminDto: CreateAdminDto) {
    return this.adminRepository.create(createAdminDto);
  }

  findAll() {
    return this.adminRepository.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.adminRepository.findByPk(id, { include: { all: true } });
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.adminRepository.update(updateAdminDto, { where: { id } });
  }

  remove(id: number) {
    return this.adminRepository.destroy({ where: { id } });
  }

  async registration(adminDto: CreateAdminDto) {
    const condidate = await this.adminRepository.findOne({where: {email: adminDto.email}});
    if (condidate) {
      throw new HttpException(
        'Bunday foydalanuvchi mavjud',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashedPassword = await bcrypt.hash(adminDto.hashed_password, 7)
    const user = await this.adminRepository.create({
      ...adminDto,
      hashed_password: hashedPassword,
    });

    return this.generateToken(user);
  }

  private async generateToken(user: Admin) {
    const payload = { id: user.id };
    return { token: this.jwtService.sign(payload) }
  }

  private async validateUser(loginDto: LoginAuthDto) {
    const user = await this.adminRepository.findOne({where: {email: loginDto.email}});
    if (!user) {
      throw new UnauthorizedException("Email yoki Parol noto'gri");
    }

    const validPassword = await bcrypt.compare(
      loginDto.email,
      user.hashed_password
    );

    if (validPassword) {
      return user;
    }
    throw new UnauthorizedException("Email yoki Parol noto'gri");
  }

  async login(loginDto: LoginAuthDto) {
    const user = await this.validateUser(loginDto);
    if (!user) {
      throw new HttpException('Foydalanuvchi yo\'q', HttpStatus.NOT_FOUND)
    }
    return this.generateToken(user)
  }
}
