import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateLocationDto {
    @ApiProperty({ example: 'obod street', description: "street" })
    @IsNotEmpty()
    @IsString()
    street: string;

    @ApiProperty({ example: '2', description: "district id" })
    @IsNotEmpty()
    @IsNumber()
    district_id: number;

    @ApiProperty({ example: '12', description: "region id" })
    @IsNotEmpty()
    @IsNumber()
    region_id: number;

    @ApiProperty({ example: '3', description: "country id" })
    @IsNotEmpty()
    @IsNumber()
    country_id: number;
}