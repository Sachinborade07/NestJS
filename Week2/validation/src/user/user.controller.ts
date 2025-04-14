import { Controller, Post, Body, UsePipes, ValidationPipe, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/user.dto';
import { ValidationError } from 'class-validator';

interface UserResponse {
    message: string;
    data: CreateUserDto;
}

@Controller('user')
export class UserController {
    @Post()
    @UsePipes(
        new ValidationPipe({
            // This function customizes what happens when validation fails
            exceptionFactory: (errors: ValidationError[]) => {
                // errors is an array of validation issues, like "email is required"

                // Get the first message from each validation error
                const errorMessages = errors.map(
                    (err) => Object.values(err.constraints as object)[0],
                );

                // Throw a custom BadRequestException with our own message and list of errors
                return new BadRequestException({
                    message: 'Validation failed',
                    errors: errorMessages,
                });
            },
        }),
    )
    createUser(@Body() createUserDto: CreateUserDto): UserResponse {
        // If validation passes, this code runs
        return {
            message: 'User created successfully',
            data: createUserDto, // Returns the data back for confirmation
        };
    }
}