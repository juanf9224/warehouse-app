import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ShoppingCartService} from '../../../../providers/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.sass']
})
export class MainMenuComponent implements OnInit {
  cartItems = 0;

  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.shoppingCartService.cartItemsSubscription.subscribe(order => {
      if (order.itemsCount === 0) {
        this.cartItems = 0;
      } else {
        this.cartItems = this.cartItems + order.itemsCount;
      }
      console.log(this.cartItems);
    });
  }

  goToCheckout() {
    if (this.cartItems && this.cartItems > 0) {
      this.router.navigate(['checkout']);
    }
  }

}
