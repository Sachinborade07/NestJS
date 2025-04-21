import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Post()
    create(@Body('name') name: string) {
        return this.userService.create(name);
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }
}
