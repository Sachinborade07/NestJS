import { IsBoolean, IsInt, IsString } from "class-validator";

export class CreateUserDto {
    @IsInt()
    id: number;

    @IsString()
    name: string;

    @IsBoolean()
    status: boolean;
}

