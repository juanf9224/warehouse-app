import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {IProductDetail} from '../product-list/product-detail/product-detail.model';
import {ProductDataService} from '../providers/product/data.service';
import {BillingService} from '../providers/billing/billing.service';
import {Router} from '@angular/router';
import { IOrder } from '../shared/models/order/order.model';
import { ProductService } from '../providers/product/product.service';
import { MatSnackBar } from '@angular/material';
import { ShoppingCartService } from '../providers/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutComponent implements OnInit {

  orders: IOrder[];
  salesman: string;
  client: string;
  amount: number;

  constructor(
    private productDataService: ProductDataService,
    private checkoutService: BillingService,
    private router: Router,
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.orders = this.productDataService.orders;
    if (this.orders) {
      console.log(this.orders);
      this.amount = this.orders.map(o => o.product).map(p => p.price)
        .reduce((a, b) => a + b);
    }
  }

  makePayment() {
    console.log(this.amount, this.salesman, this.client);

    if (this.amount && this.salesman && this.client) {
      this.checkoutService.makePayment(
        {
          amount: this.amount,
          salesman: this.salesman,
          client: this.client
        }).subscribe(() => {

        console.log('paymentMade');
        this.updateProductsAvailableQuantity();
      });
    } else {
      console.warn('null values');
    }

  }

  updateProductsAvailableQuantity() {
    const uniqueOrders: IOrder[] = [];
    this.orders.forEach(o => {
      const order = o;
      if (!(uniqueOrders.filter(f => f.product._id === order.product._id).length > 0)) {
        uniqueOrders.push(o);
      } else if (uniqueOrders.length > 0) {
        uniqueOrders.find(f => f.product._id === order.product._id).itemsCount += order.itemsCount;
        console.log('isDup', order);
      } else {
        console.log('isDup', order);
      }
    });

    console.log(uniqueOrders);

    uniqueOrders.forEach((u: any) => {
      this.productService.find(u.product._id)
      .subscribe(res => {
        const product = res.body;
        console.log('Before save: ', res.body, product);
        if (product.quantity && (product.quantity - u.itemsCount) >= 0) {
          product.quantity -= u.itemsCount;
        } else {
          product.quantity = 0;
        }
        this.productService.update(product).subscribe((response) => {
          if (response.body.quantity < 5) {
            this.openSnackBar(`Quedan menos de 5 ${response.body.name}`, 'Ok');
          }
        });
      });
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    }).afterDismissed().subscribe(() => {
      this.shoppingCartService.cartItemsSubscription.next({product: null, itemsCount: 0});
      this.router.navigate(['product-list']);
    });
  }

}
