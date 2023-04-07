import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'John2001', description: "username" })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({ example: 'John', description: "firstname" })
    @IsNotEmpty()
    @IsString()
    first_name: string;

    @ApiProperty({ example: 'Doe', description: ";lastname" })
    @IsNotEmpty()
    @IsString()
    last_name: string;

    @ApiProperty({ example: '2', description: "passport id" })
    @IsNotEmpty()
    @IsNumber()
    passportId: number;

    @ApiProperty({ example: 'yunusobod 4', description: "address" })
    @IsNotEmpty()
    @IsString()
    address: string;

    @ApiProperty({ example: 'myphoto.jpg', description: "user photo" })
    @IsNotEmpty()
    @IsString()
    user_photo: string;

    @ApiProperty({ example: '+998 99 142 23 03', description: "phone number" })
    @IsNotEmpty()
    @IsPhoneNumber()
    phone_number: string;

    @ApiProperty({ example: 'example@gmail.com', description: "your email" })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'Password', description: "john2201" })
    @IsNotEmpty()
    @IsString()
    password: string;
}