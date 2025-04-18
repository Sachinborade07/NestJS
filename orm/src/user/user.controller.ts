import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { Users } from './user.entity';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    create(@Body() users: Partial<Users>) {
        return this.userService.create(users)
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() user: Partial<Users>) {
        return this.userService.update(+id, user);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(+id);
    }
}
