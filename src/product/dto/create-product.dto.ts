import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @ApiProperty({ example: 'Name', description: "John" })
    @IsNotEmpty()
    @IsNumber()
    user_id: number;

    @ApiProperty({ example: 'Name', description: "John" })
    @IsNotEmpty()
    @IsNumber()
    likes_id: number;

    @ApiProperty({ example: '+998991422303', description: "phone number" })
    @IsNotEmpty()
    @IsString()
    product_photo: string;

    @ApiProperty({ example: '+998991422303', description: "phone number" })
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({ example: '+998991422303', description: "phone number" })
    @IsNotEmpty()
    @IsString()
    describtion: string;

    @ApiProperty({ example: '+998991422303', description: "phone number" })
    @IsNotEmpty()
    @IsString()
    price: string;

    @ApiProperty({ example: '+998991422303', description: "phone number" })
    @IsNotEmpty()
    @IsNumber()
    views: number;

    @ApiProperty({ example: '+998991422303', description: "phone number" })
    @IsNotEmpty()
    @IsString()
    loaction_id: string;

    @ApiProperty({ example: 'Name', description: "John" })
    @IsNotEmpty()
    @IsNumber()
    card_id: number;

    @ApiProperty({ example: 'Name', description: "John" })
    @IsNotEmpty()
    @IsNumber()
    comments_id: number;

    @ApiProperty({ example: 'Name', description: "John" })
    @IsNotEmpty()
    @IsNumber()
    product_type_id: number;
}