import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { get } from 'http';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders() {
    return {
      message: 'getOrders'
    }
  }

  @Get(':id')
  getOrderById(@Param('id') id: number) {
    return {
      message: 'getOrderById'
    };
  }

  @Post()
  createOrder(@Body() payload: any) {
    return {
      message: 'Create Order',
      payload,
    };
  }

}
