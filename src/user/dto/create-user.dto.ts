import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'Name', description: "John" })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({ example: 'Name', description: "John" })
    @IsNotEmpty()
    @IsString()
    first_name: string;

    @ApiProperty({ example: 'Name', description: "John" })
    @IsNotEmpty()
    @IsString()
    last_name: string;

    @ApiProperty({ example: 'Name', description: "John" })
    @IsNotEmpty()
    @IsNumber()
    passportId: number;

    @ApiProperty({ example: '+998991422303', description: "phone number" })
    @IsNotEmpty()
    @IsString()
    address: string;

    @ApiProperty({ example: '+998991422303', description: "phone number" })
    @IsNotEmpty()
    @IsString()
    user_photo: string;

    @ApiProperty({ example: '+998991422303', description: "phone number" })
    @IsNotEmpty()
    @IsPhoneNumber()
    phone_number: string;

    @ApiProperty({ example: 'example@gmail.com', description: "your email" })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'Password', description: "john2201" })
    @IsNotEmpty()
    @IsStrongPassword()
    password: string;
}