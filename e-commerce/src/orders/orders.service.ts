import { Injectable } from '@nestjs/common';
import { Order } from 'src/dto/order.dto';

@Injectable()
export class OrdersService {
    private orders: Order[] = [];

    addOrder(order: Omit<Order, 'date'>): void {
        this.orders.push({ ...order, date: new Date() });
    }

    getOrders(): Order[] {
        return this.orders;
    }
}
