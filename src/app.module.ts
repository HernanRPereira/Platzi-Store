import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { OrdersController } from './controllers/orders.controller';
import { CustomerController } from './controllers/customer.controller';

@Module({
  imports: [],
  controllers: [ProductsController, CategoriesController, OrdersController, CustomerController],
  providers: [AppService],
})
export class AppModule {}
