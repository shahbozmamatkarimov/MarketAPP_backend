import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCountryDto {
    @ApiProperty({ example: '+998991422303', description: "phone number" })
    @IsNotEmpty()
    @IsString()
    country: string;
}