import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query } from '@nestjs/common';
import { UserAgent } from 'src/decorator/user_agent.decorator';
import { CreateUserDto } from 'src/dto/create_user.dto';
import { JsonParsePipe } from 'src/pipes/json_parse.pipe';
import { ToUpperCasePipe, TrimPipe } from 'src/pipes/trim.pipes';

@Controller('users')
export class UsersController {

    @Post()
    createUser(@Body() createUserDto: CreateUserDto): CreateUserDto {
        return { id: createUserDto.id, name: createUserDto.name, status: createUserDto.status };
    }



    // Q10 
    @Post('name')
    createUserName(@Body('name', TrimPipe) name: string) {
        return { trimmedName: name };
    }


    // Q7
    @Get('status')
    getStatus(@Query('isActive', ParseBoolPipe) isActive: boolean) {
        return { isActive };
    }

    // Q8 //
    // @Get(':id')
    // getUser(@Param('id', ParseIntPipe) id: number /*, @Query('name') name: string*/) {
    //     return { id };
    // }

    // JUST CHECKING WITH RESPECT TO QUESTION 15
    @Get(':id')
    getUser(@Param('id') id: string) {
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


    @Get()
    getUsers() {
        return [{ id: 1, name: 'Alice' }];
    }


    // Q17
    @Get('user-agent')
    getUserAgent(@UserAgent() userAgent: string) {
        return { message: "User Agent Exists", userAgent }
    }



}
