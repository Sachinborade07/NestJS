import { Injectable } from '@nestjs/common';
import { CartItem } from 'src/dto/cart_item.dto';

@Injectable()
export class CartService {
    private cart: CartItem[] = [];

    addToCart(item: CartItem): { message: string; cart: CartItem[] } {
        this.cart.push(item);
        return { message: 'Item added', cart: this.cart };
    }

    getCart(): CartItem[] {
        return this.cart;
    }

    removeFromCart(product: string): { message: string; cart: CartItem[] } {
        this.cart = this.cart.filter((item) => item.product !== product);
        return { message: 'Item removed', cart: this.cart };
    }

    clearCart(): void {
        this.cart = [];
    }

    getCartItems(): CartItem[] {
        return this.cart;
    }
}

