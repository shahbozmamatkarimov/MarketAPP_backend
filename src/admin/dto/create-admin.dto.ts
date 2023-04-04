import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateAdminDto {
    @ApiProperty({ example: 'Name', description: "John" })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: '+998991422303', description: "phone number" })
    @IsNotEmpty()
    @IsString()
    phone_number: string;

    @ApiProperty({ example: 'example@gmail.com', description: "your email" })
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty({ example: 'example@gmail.com', description: "your email" })
    @IsNotEmpty()
    @IsBoolean()
    is_active: boolean;

    @ApiProperty({ example: 'Password', description: "john2201" })
    @IsNotEmpty()
    @IsString()
    hashed_password: string;
}