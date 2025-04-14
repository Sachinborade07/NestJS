import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from '../dto/order.dto';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) { }

    @Post()
    createOrder(
        @Body()
        body: Omit<Order, 'date'>
    ): { message: string } {
        this.ordersService.addOrder(body);
        return { message: 'Order placed successfully' };
    }

    @Get()
    getOrders(): Order[] {
        return this.ordersService.getOrders();
    }
}
