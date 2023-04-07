import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { FilesModule } from '../files/files.module';
import { OtpModule } from '../otp/otp.module';
import { Otp } from '../otp/models/otp.model';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Otp]),
    JwtModule.register({
      secret: 'MySecretKey',
      signOptions: {
        expiresIn: '24h'
      },
    }),
    MailModule
  ],
  controllers: [UserController],
  providers: [UsersService]
})
export class UserModule { }
