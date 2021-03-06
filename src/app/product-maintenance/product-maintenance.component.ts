import { Component, OnInit } from '@angular/core';
import { IProductDetail } from '../product-list/product-detail/product-detail.model';
import {ProductService} from '../providers/product/product.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-product-maintenance',
  templateUrl: './product-maintenance.component.html',
  styleUrls: ['./product-maintenance.component.scss']
})
export class ProductMaintenanceComponent implements OnInit {

  product = {
    _id: '',
    name: '',
    price: null,
    minPrice: null,
    maxPrice: null,
    quantity: null,
    expirationDate: '',
    warranty: ''
  };

  constructor(private productService: ProductService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  save() {
    console.log(this.product);
    this.productService.saveProduct(this.product).subscribe(res => this.snackBar.open('Producto guardado satisfactoriamente', 'Ok'));
  }

}
