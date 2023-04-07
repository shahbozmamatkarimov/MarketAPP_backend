import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumberString, IsPhoneNumber, IsString } from "class-validator";

export class VerifyOtpDto {
    @ApiProperty({ example: '+998991422303', description: "check" })
    @IsNotEmpty()
    @IsPhoneNumber()
    check: string;

    @ApiProperty({ example: 'dnjksfksnkflinvkg.sg,ffg.tr,grtg.e;/ffoijmf,===', description: "verification key" })
    @IsNotEmpty()
    @IsString()
    verification_key: string;

    @ApiProperty({ example: '1234', description: "otp" })
    @IsNumberString()
    otp: string;
}