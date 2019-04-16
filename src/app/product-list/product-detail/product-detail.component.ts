import { Component, OnInit, Input } from '@angular/core';
import { IProductDetail } from './product-detail.model';
import {ProductService} from '../../providers/product/product.service';
import {ActivatedRoute} from '@angular/router';
import {MockImageUtil} from '../../shared/util/mock-image.util';
import {ShoppingCartService} from '../../providers/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: IProductDetail;
  buyingQuantity = 1;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((data: any) => this.productService.find(data.id)
                                        .subscribe(res => this.product = res.body)) ;
  }

  getImageToUse() {
    if (this.product) {
      return MockImageUtil.getImageToUse(this.product.name);
    }
  }

  addToCart() {
    this.shoppingCartService.cartItemsSubscription.next({ product: this.product, itemsCount: this.buyingQuantity });
  }

}
