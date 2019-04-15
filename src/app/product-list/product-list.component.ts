import { Component, OnInit } from '@angular/core';
import { IProductDetail } from './product-detail/product-detail.model';
import { ProductService } from '../providers/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: IProductDetail[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.productService.findAll().subscribe(res => this.productList = res.body);
  }

}
