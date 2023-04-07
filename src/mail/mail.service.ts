import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as otpGenerator from 'otp-generator';
import { AddMinutesToDate } from 'src/helpers/addMinutes';
import { Otp } from '../otp/models/otp.model';
import { User } from '../user/entities/user.entity';

@Injectable()
export class MailService {
    constructor(
        private mailService: MailerService,
        @InjectModel(Otp) private otpRepository: typeof Otp,
    ) { }

    async sendOtpToEmail(user: User): Promise<void> {
        const otp = otpGenerator.generate(4, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false
        });
        console.log(otp);
        
        const now = new Date();
        const expiration_time = AddMinutesToDate(now, 5);
        await this.otpRepository.create({ otp, expiration_time, check: user.email });
        await this.mailService.sendMail({
            to: user.email,
            subject: "Assalomu alaykum. Avto ijara saytiga xush kelibsiz!",
            template: './confirmation',
            context: {
                name: user.username,
                otp,
            }
        })
    }
}