import { Component, OnInit, Input } from '@angular/core';
import { IProductDetail } from './product-detail.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: IProductDetail;

  constructor() { }

  ngOnInit() {
  }

}
