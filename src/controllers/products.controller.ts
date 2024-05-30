import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`
    };
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: 'products filteres'
    };
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return {
      message: `product id=> ${productId}`
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Create Product',
      payload,
    };
  }

  @Put(':productId')
  update(@Param('productId') productId: number, @Body() payload: any) {
    return {
      productId,
      payload,
    };
  }

  @Delete(':productId')
  deleteProduct(@Param('productId') productId: number) {
    return {
      productId,
    };
  }
}
