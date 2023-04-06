import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { FilesModule } from '../files/files.module';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    JwtModule.register({
      secret: 'MySecretKey',
      signOptions: {
        expiresIn: '24h'
      },
    }),
    FilesModule,
    MailModule,
  ],
  controllers: [UserController],
  providers: [UsersService]
})
export class UserModule { }
