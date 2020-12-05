import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  public cart: Cart;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
  }

  ngOnInit() {
  }

}