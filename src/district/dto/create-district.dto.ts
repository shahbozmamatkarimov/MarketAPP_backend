import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDistrictDto {
    @ApiProperty({ example: 'Kattaqo\'rg\'on', description: "district" })
    @IsNotEmpty()
    @IsString()
    district: string;
}