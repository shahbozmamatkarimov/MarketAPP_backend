import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateAdminDto {
    @ApiProperty({ example: 'Doe', description: "username" })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({ example: 'example@gmail.com', description: "your email" })
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty({ example: 'Password', description: "john2201" })
    @IsNotEmpty()
    @IsString()
    hashed_password: string;

    @ApiProperty({ example: '+998991422303', description: "phone number" })
    @IsNotEmpty()
    @IsString()
    phone_number: string;
}