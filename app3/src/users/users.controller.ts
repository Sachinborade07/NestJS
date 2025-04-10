import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create_user.dto';
import { JsonParsePipe } from 'src/pipes/json_parse.pipe';
import { ToUpperCasePipe, TrimPipe } from 'src/pipes/trim.pipes';

@Controller('users')
export class UsersController {

    @Post()
    createUser(@Body() CreateUserDto: CreateUserDto): CreateUserDto {
        return { id: CreateUserDto.id, name: CreateUserDto.name, status: CreateUserDto.status };
    }

    // Q10 
    @Post('users')
    createUserName(@Body('name', TrimPipe) name: string) {
        return { trimedName: name }
    }


    // Q7
    @Get('status')
    getStatus(@Query('isActive', ParseBoolPipe) isActive: boolean) {
        return { isActive };
    }

    // Q8 //
    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number /*, @Query('name') name: string*/) {
        return { id };
    }



    //#Q9 #Q11
    @Post('profile')
    CreateUser(
        @Body('name', TrimPipe) name: string,
        @Body('username', ToUpperCasePipe) username: string
    ) {
        return { name, username };
    }


    // Q12  not working ?? 
    @Get('parse')
    parseJson(@Query('data', new JsonParsePipe()) data: CreateUserDto) {
        return data;
    }

}
