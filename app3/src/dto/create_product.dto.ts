import { IsString, MinLength, IsNumber, IsPositive, IsOptional, IsArray } from "class-validator";

export class CreateProductDto {

    @IsString()
    @MinLength(3)
    name: string;

    @IsNumber()
    @IsPositive()
    price: number;

    @IsOptional()
    @IsArray()
    @MinLength(2, { each: true })
    tags?: string[];

}

