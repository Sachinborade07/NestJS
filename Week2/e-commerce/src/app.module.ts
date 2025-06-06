import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartController } from './cart/cart.controller';
import { CartService } from './cart/cart.service';
import { PaymentController } from './payment/payment.controller';
import { CartModule } from './cart/cart.module';



@Module({
  imports: [CartModule],
  controllers: [AppController, CartController, PaymentController],
  providers: [AppService, CartService],
})
export class AppModule { }
