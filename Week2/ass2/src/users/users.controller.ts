import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Timeout } from 'src/decorator/timeout.decorator';
import { IsEvenPipe } from 'src/pipe/is-even.pipe';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }


    // Q1
    // @Get(':id/role/:role')
    // getUserWithRole(
    //     @Param('id') id: string,
    //     @Param('role') role: string
    // ) {
    //     return this.usersService.getUserWithRole(id, role);
    // }

    // Q2
    @Get(':id/role/:role')
    @Timeout(1000)
    getUserWithRole(
        @Param('id') id: string,
        @Param('role') role: string
    ) {
        return this.usersService.getUserWithRole(id, role);
    }

    // Q3 
    @Get('/check-even/:num')
    checkEven(@Param('num', IsEvenPipe) num: number) {
        return { message: `Number ${num} is even` }
    }
}


