import { Component, OnInit } from '@angular/core';
import { IProductDetail } from './product-detail/product-detail.model';
import { ProductService } from '../providers/product/product.service';
import {ProductDataService} from '../providers/product/data.service';
import {MockImageUtil} from '../shared/util/mock-image.util';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: IProductDetail[];
  quantity = 1;

  constructor(
    private productService: ProductService,
    private productDataService: ProductDataService
  ) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.productService.findAll().subscribe(res => this.productList = res.body);
  }

  addToCart(product) {
    this.productDataService.quantity = this.productDataService.quantity + this.quantity;
    this.productDataService.productList.push(product);
  }

  getImageToUse(name: string) {
    return MockImageUtil.getImageToUse(name);
  }
}
