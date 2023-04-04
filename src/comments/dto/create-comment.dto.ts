import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCommentDto {
    @ApiProperty({ example: 'Name', description: "John" })
    @IsNotEmpty()
    @IsNumber()
    user_id: number;

    @ApiProperty({ example: 'Name', description: "John" })
    @IsNotEmpty()
    @IsNumber()
    product_id: number;

    @ApiProperty({ example: '+998991422303', description: "phone number" })
    @IsNotEmpty()
    @IsString()
    comment: string;
}