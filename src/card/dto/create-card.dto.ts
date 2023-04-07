import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCardDto {
    @ApiProperty({ example: 'UZCARD', description: "card type" })
    @IsNotEmpty()
    @IsString()
    type: string;

    @ApiProperty({ example: '9989 9142 2303 1234', description: "card code" })
    @IsNotEmpty()
    @IsNumber()
    user_id: number;
}
