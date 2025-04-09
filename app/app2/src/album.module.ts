import { Controller, Get } from "@nestjs/common";

@Controller("albums")
export class AlbumController {

    @Get("photo")
    getPhoto() {
        return "GOT PHOTO SUCCESSFULLY";
    }
}