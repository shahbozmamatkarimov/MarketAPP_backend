import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPhoneNumber } from "class-validator";

export class PhoneUserDto {
    @ApiProperty({ example: "998901234567" })
    @IsNotEmpty()
    @IsPhoneNumber()
    phone: string;
}