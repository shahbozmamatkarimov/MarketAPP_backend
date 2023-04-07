import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCommentDto {
    @ApiProperty({ example: '1', description: "user id" })
    @IsNotEmpty()
    @IsNumber()
    user_id: number;

    @ApiProperty({ example: '2', description: "product id" })
    @IsNotEmpty()
    @IsNumber()
    product_id: number;

    @ApiProperty({ example: 'how much costs?', description: "comments" })
    @IsNotEmpty()
    @IsString()
    comment: string;
}