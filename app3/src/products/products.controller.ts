import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDto } from 'src/dto/create_product.dto';
import { CreateTracingOptions } from 'trace_events';

@Controller('products')
export class ProductsController {

    @Post()
    create(@Body() CreateProductDto: CreateProductDto) {
        return { message: 'Product Created', data: CreateProductDto };
    }
}
