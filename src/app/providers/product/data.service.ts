import { Injectable } from '@angular/core';
import { IOrder } from 'src/app/shared/models/order/order.model';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  orders: IOrder[] = [];

  constructor(private shoppingCartService: ShoppingCartService) {
    this.shoppingCartService.cartItemsSubscription.subscribe(order => {
      this.orders.push(order);
      console.log(this.orders);
    });
  }
}
