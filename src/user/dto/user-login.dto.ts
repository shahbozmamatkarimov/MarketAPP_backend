import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsStrongPassword, IsEmail } from "class-validator";

export class UserLoginDto {
    @ApiProperty({ example: 'John2303', description: "username" })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({ example: 'example@gmail.com', description: "email" })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsStrongPassword()
    password: string;

    @ApiProperty({ example: 'p@$w0rd', description: "confirm password" })
    @IsNotEmpty()
    @IsStrongPassword()
    confirm_password: string;
}