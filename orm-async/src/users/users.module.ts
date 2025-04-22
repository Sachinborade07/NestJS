import { Module, Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { person_id } from './users.entity';
import { UsersController } from './users.controller';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),
  TypeOrmModule.forRootAsync({
    useFactory: (): TypeOrmModuleOptions => ({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
      autoLoadEntities: true,
      synchronize: true
    })
  }),
  TypeOrmModule.forFeature([person_id])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
