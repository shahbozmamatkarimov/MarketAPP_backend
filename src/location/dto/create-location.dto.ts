import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateLocationDto {
    @ApiProperty({ example: 'Kattaqo\'rg\'on', description: "district" })
    @IsNotEmpty()
    @IsString()
    street: string;

    @ApiProperty({ example: 'Name', description: "John" })
    @IsNotEmpty()
    @IsNumber()
    district_id: number;

    @ApiProperty({ example: 'Name', description: "John" })
    @IsNotEmpty()
    @IsNumber()
    region_id: number;

    @ApiProperty({ example: 'Name', description: "John" })
    @IsNotEmpty()
    @IsNumber()
    country_id: number;
}