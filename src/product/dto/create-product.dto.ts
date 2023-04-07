import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @ApiProperty({ example: '23', description: "user id" })
    @IsNotEmpty()
    @IsNumber()
    user_id: number;

    @ApiProperty({ example: '25', description: "likes id" })
    @IsNotEmpty()
    @IsNumber()
    likes_id: number;

    @ApiProperty({ example: 'myphoto.jpg', description: "photo" })
    @IsNotEmpty()
    @IsString()
    product_photo: string;

    @ApiProperty({ example: 'Furniture', description: "title" })
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({ example: 'Very cheap and comfortable chairs', description: "description" })
    @IsNotEmpty()
    @IsString()
    describtion: string;

    @ApiProperty({ example: '$200', description: "price" })
    @IsNotEmpty()
    @IsString()
    price: string;

    @ApiProperty({ example: '1234', description: "views" })
    @IsNotEmpty()
    @IsNumber()
    views: number;

    @ApiProperty({ example: '21', description: "location id" })
    @IsNotEmpty()
    @IsString()
    loaction_id: string;

    @ApiProperty({ example: '2', description: "card id" })
    @IsNotEmpty()
    @IsNumber()
    card_id: number;

    @ApiProperty({ example: '5', description: "comment id" })
    @IsNotEmpty()
    @IsNumber()
    comments_id: number;

    @ApiProperty({ example: '23', description: "product type id" })
    @IsNotEmpty()
    @IsNumber()
    product_type_id: number;
}