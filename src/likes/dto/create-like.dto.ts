import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateLikeDto {
    @ApiProperty({ example: '12', description: "likes" })
    @IsNotEmpty()
    @IsNumber()
    likes: number;

    @ApiProperty({ example: '23', description: "dislikes" })
    @IsNotEmpty()
    @IsNumber()
    dislikes: number;
}