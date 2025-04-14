export interface Order {
    id: string;
    items: { product: string; quantity: number; price: number }[];
    customerName: string;
    totalAmount: number;
    date: Date;
    status?: string;
}