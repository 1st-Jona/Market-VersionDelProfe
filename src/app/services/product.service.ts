import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  constructor() {
    this.products.push({
      name: 'Mouse',
      photo: 'https://picsum.photos/id/237/300/300',
      description: 'Gato',
      price: 50.50
    });

    this.products.push({
      name: 'Carro',
      photo: 'https://picsum.photos/id/238/300/300',
      description: 'Perro',
      price: 100.50
    });

    this.products.push({
      name: 'Perro',
      photo: 'https://picsum.photos/id/239/300/300',
      description: 'Tlacuache',
      price: 200.50
    });
  }

  public getProducts(): Product[] {
    return this.products;
  }

  public newProduct(prod: Product): Product []{
    this.products.push(prod);
    return this.products;
  }
}