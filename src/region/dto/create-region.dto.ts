import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRegionDto {
    @ApiProperty({ example: '+998991422303', description: "phone number" })
    @IsNotEmpty()
    @IsString()
    region: string;
}