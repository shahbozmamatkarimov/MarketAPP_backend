import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class LoginAuthDto {
    @ApiProperty({example: 'John2303', description: "Login"})
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty({example: 'p@$w0rd', description: "password"})
    @IsNotEmpty()
    @IsStrongPassword()
    password: string;
}