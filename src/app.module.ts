import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { OrdersController } from './controllers/orders.controller';
import { CustomerController } from './controllers/customer.controller';
import { ProductsService } from './services/products.service';

@Module({
  imports: [],
  controllers: [ProductsController, CategoriesController, OrdersController, CustomerController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
