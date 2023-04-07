import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCountryDto {
    @ApiProperty({ example: 'Uzbekistan', description: "country" })
    @IsNotEmpty()
    @IsString()
    country: string;
}