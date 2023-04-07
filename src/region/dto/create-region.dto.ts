import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRegionDto {
    @ApiProperty({ example: 'Yunusabad', description: "region" })
    @IsNotEmpty()
    @IsString()
    region: string;
}