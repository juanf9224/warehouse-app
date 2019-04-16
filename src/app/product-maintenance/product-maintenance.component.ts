import { Component, OnInit } from '@angular/core';
import { IProductDetail } from '../product-list/product-detail/product-detail.model';

@Component({
  selector: 'app-product-maintenance',
  templateUrl: './product-maintenance.component.html',
  styleUrls: ['./product-maintenance.component.scss']
})
export class ProductMaintenanceComponent implements OnInit {

  product: IProductDetail = {};

  constructor() { }

  ngOnInit() {
  }

}
