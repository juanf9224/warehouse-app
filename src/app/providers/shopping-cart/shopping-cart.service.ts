import { Injectable, OnDestroy } from '@angular/core';
import {Subject} from 'rxjs';
import { IOrder } from 'src/app/shared/models/order/order.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService implements OnDestroy {
  cartItemsSubscription = new Subject<IOrder>();

  constructor() {}

  ngOnDestroy(): void {
    this.cartItemsSubscription.complete();
  }
}
