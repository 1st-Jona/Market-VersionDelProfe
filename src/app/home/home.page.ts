import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public products: Product[];

  constructor(private productService: ProductService, private cartService: CartService) {
    this.products = this.productService.getProducts();
  }

  public addToCart(p: Product): void{
    this.cartService.addProduct(p);
  }


}
