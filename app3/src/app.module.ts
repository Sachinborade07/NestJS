import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { MiddlewareBuilder } from '@nestjs/core';
import { RequestLoggerMiddleware } from './middleware/request_logger.middleware';
import { AuthoraizationMiddleware } from './middleware/auth.middleware';
import { VerifyApiKeyMiddleware } from './middleware/valid_key_api.middleware';
import path from 'path';

@Module({
  imports: [ProductsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})

// Q14
export class AppModule implements NestModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     // .apply(RequestLoggerMiddleware)
  //     .apply(AuthoraizationMiddleware)
  //     .forRoutes('users/:id')
  // }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(VerifyApiKeyMiddleware)
      .forRoutes({
        method: RequestMethod.GET,
        path: 'reports',
      }); // Or any route
  }
}
