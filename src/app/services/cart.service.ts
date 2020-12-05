import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart;

  constructor() {
    this.cart = {
      products: [],
      date: new Date(),
      subtotal: 0,
      iva: 0,
      total: 0,
      qtypord: 0
    };
  }

  public getCart(): Cart {
    return this.cart;
  }

  public addProduct(product: Product): Cart {
    this.cart.products.push(product);
    this.cart.subtotal += product.price;
    this.cart.iva = this.cart.subtotal * 0.16;
    this.cart.total = this.cart.subtotal + this.cart.iva;
    this.cart.date = new Date();
    return this.cart;
  }

}