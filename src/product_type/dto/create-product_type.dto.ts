import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductTypeDto {
    @ApiProperty({ example: 'Chair', description: "type" })
    @IsNotEmpty()
    @IsString()
    type: string;
}