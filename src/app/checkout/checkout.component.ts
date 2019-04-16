import { Component, OnInit } from '@angular/core';
import {IProductDetail} from '../product-list/product-detail/product-detail.model';
import {ProductDataService} from '../providers/product/data.service';
import {BillingService} from '../providers/billing/billing.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  productList: IProductDetail[];
  quantity: number;
  salesman: string;
  client: string;
  amount: number;

  constructor(
    private productDataService: ProductDataService,
    private checkoutService: BillingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productList = this.productDataService.productList;
    this.quantity = this.productDataService.quantity;
  }

  makePayment() {
    this.amount = this.productList.map(p => p.price)
      .reduce((a, b) => a + b);
    console.log(this.amount, this.salesman, this.client);
    if (this.amount && this.salesman && this.client) {
      this.checkoutService.makePayment(
        {
          amount: this.amount,
          salesman: this.salesman,
          client: this.client
        }).subscribe(() => {
        console.log('paymentMade');
        this.router.navigate(['product-list']);
      });
    } else {
      console.warn('null values');
    }
  }

}
