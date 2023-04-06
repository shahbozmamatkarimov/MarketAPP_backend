import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsStrongPassword, IsEmail } from "class-validator";

export class UserLoginDto {
    @ApiProperty({ example: 'John2303', description: "Login" })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({ example: 'John2303', description: "Login" })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'p@$w0rd', description: "password" })
    @IsNotEmpty()
    @IsStrongPassword()
    password: string;

    @ApiProperty({ example: 'p@$w0rd', description: "password" })
    @IsNotEmpty()
    @IsStrongPassword()
    confirm_password: string;
}