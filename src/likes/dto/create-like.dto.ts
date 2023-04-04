import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateLikeDto {
    @ApiProperty({ example: 'Kattaqo\'rg\'on', description: "district" })
    @IsNotEmpty()
    @IsNumber()
    likes: number;

    @ApiProperty({ example: 'Kattaqo\'rg\'on', description: "district" })
    @IsNotEmpty()
    @IsNumber()
    dislikes: number;
}