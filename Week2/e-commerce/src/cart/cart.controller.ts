import { Controller, Post, Get, Delete, Body, Query } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartItem } from 'src/dto/cart_item.dto';


@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {
        console.log("This is CART");
    }

    @Post()
    add(@Body() body: CartItem): { message: string; cart: CartItem[] } {
        return this.cartService.addToCart(body);
    }

    @Get()
    get(): CartItem[] {
        return this.cartService.getCart();
    }

    @Delete()
    remove(@Query('product') product: string): { message: string; cart: CartItem[] } {
        return this.cartService.removeFromCart(product);
    }
}
