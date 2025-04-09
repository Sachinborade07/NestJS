import { Controller, Post, Req, HttpCode, Res, Get } from "@nestjs/common";
import { Request, Response } from "express";

@Controller("/users")
export class UserController {

    @Get("/profile")
    // @HttpCode(200) // here we can see that we are able to change the status code 
    getProfile(@Req() req: Request, @Res() res: Response) {
        res.json({
            "hello": "world",
        });
    }
}