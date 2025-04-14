import { Controller, Post } from '@nestjs/common';
import { CartService } from '../cart/cart.service';
import { CartItem } from 'src/dto/cart_item.dto';
import { InsufficientStockException } from 'src/exception/insufficient_stock.exception';

@Controller('payment')
export class PaymentController {
    constructor(
        private readonly cartService: CartService,
    ) { }

    @Post()
    processPayment(): { message: string } {
        const cart: CartItem[] = this.cartService.getCartItems();

        if (cart.length === 0) {
            throw new InsufficientStockException();
        }

        this.cartService.clearCart();

        return { message: 'Payment successful, order placed' };
    }
}
