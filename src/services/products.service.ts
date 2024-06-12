import { Injectable } from '@nestjs/common';

import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;

  private products: Product[] = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Producto AAA X100',
      price: 100,
      image: '',
      stock: 10,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((product) => product.id === id);
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const index = this.products.findIndex((product) => product.id === id);
    this.products[index] = {
     ...this.products[index],
     ...payload,
    };
    return this.products[index];
  }

  delete(id: number) {
    const index = this.products.findIndex((product) => product.id === id);
    this.products.splice(index, 1);
    return this.products;
  }
}
