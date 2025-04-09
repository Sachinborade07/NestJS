import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { AlbumController } from './album.module';


@Module({
  controllers: [UserController, AlbumController]
})
export class AppModule { }
