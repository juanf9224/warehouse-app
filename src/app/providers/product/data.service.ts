import { Injectable } from '@angular/core';
import {IProductDetail} from '../../product-list/product-detail/product-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  product: IProductDetail;
  productList: IProductDetail[] = [];
  quantity = 0;

  constructor() {}
}
