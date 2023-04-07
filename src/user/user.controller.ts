import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SelfGuard } from '../guards/user-self.guard';
import { JwtGuard } from '../guards/jwt-auth.guard';
import { Response } from 'express';
import { VerifyOtpDto } from './dto/verifyOtp.dto';
import { CookieGetter } from '../decorators/cookieGetter.decorator';
import { PhoneUserDto } from './dto/phone-user.dto';
import { UserLoginDto } from './dto/user-login.dto';

@ApiTags("User")
@Controller('user')
export class UserController {
  constructor(private readonly usersService: UsersService) { }

  @ApiOperation({ summary: 'Registration' })
  @Post('signup')
  registration(@Body() createUserDto: CreateUserDto, @Res({ passthrough: true }) res: Response) {
    return this.usersService.register(createUserDto, res);
  }

  @ApiOperation({ summary: 'Login' })
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  login(@Body() loginUserDto: UserLoginDto, @Res({ passthrough: true }) res: Response) {
    return this.usersService.login(loginUserDto, res);
  }


  @ApiOperation({ summary: 'Logout' })
  @HttpCode(HttpStatus.OK)
  @Post('logout')
  logout(@CookieGetter('refresh_token') refreshToken: string, @Res({ passthrough: true }) res: Response) {
    return this.usersService.logout(refreshToken, res);
  }


  @HttpCode(HttpStatus.OK)
  @Post(':id/refresh')
  refreshToken(@Param('id') id: number, @CookieGetter('refresh_token') refreshToken: string, @Res({ passthrough: true }) res: Response) {
    return this.usersService.refreshToken(id, refreshToken, res);
  }

  @ApiOperation({ summary: 'Get all users' })
  @UseGuards(JwtGuard)
  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Send OTP' })
  @UseGuards(JwtGuard)
  @Post('otp')
  newOtp(@Body() phoneUserDto: PhoneUserDto) {
    return this.usersService.newOtp(phoneUserDto);
  }


  @ApiOperation({ summary: 'Verify OTP' })
  @UseGuards(JwtGuard)
  @Post('verify')
  verifyOtp(@Body() verifyOtpDto: VerifyOtpDto) {
    return this.usersService.verifyOtp(verifyOtpDto);
  }

  @ApiOperation({ summary: 'Get user by ID' })
  @UseGuards(SelfGuard)
  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @ApiOperation({ summary: 'Get user by email' })
  @UseGuards(SelfGuard)
  @UseGuards(JwtGuard)
  @Get(':email')
  getUserByEmail(@Param('email') email: string) {
    return this.usersService.getUserByEmail(email);
  }


  @ApiOperation({ summary: 'Delete a user' })
  @ApiResponse({ status: 203 })
  @UseGuards(SelfGuard)
  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }


  @ApiOperation({ summary: 'Update user by ID' })
  @UseGuards(SelfGuard)
  @UseGuards(JwtGuard)
  @Post(':id')
  updateUser(@Param('id') updateUserDto: UpdateUserDto, id: string) {
    return this.usersService.updateUser(updateUserDto, +id);
  }
}
