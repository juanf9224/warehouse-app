import { Component, OnInit } from '@angular/core';
import { IProductDetail } from '../product-list/product-detail/product-detail.model';
import {ProductService} from '../providers/product/product.service';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {count, filter} from 'rxjs/operators';

@Component({
  selector: 'app-product-maintenance',
  templateUrl: './product-maintenance.component.html',
  styleUrls: ['./product-maintenance.component.scss']
})
export class ProductMaintenanceComponent implements OnInit {

  product: IProductDetail = {
    _id: '',
    name: '',
    price: null,
    minPrice: null,
    maxPrice: null,
    quantity: null,
    expirationDate: null,
    warranty: null
  };

  constructor(private productService: ProductService, private snackBar: MatSnackBar, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.activatedRoute.params
        .subscribe(data => {
          if (data && data.id) {
            this.productService.find(data.id)
              .subscribe(res => this.product = res.body
                , () => this.snackBar.open(`No se pudo cargar el producto con id: ${data.id}`));
          }
        });
  }

  save() {
    if (this.product._id) {
      this.productService.update(this.product).subscribe(() => this.snackBar.open('Producto guardado satisfactoriamente', 'Ok'),
        () => this.snackBar.open(`No se pudo guardar el producto: ${this.product.name}`));
    } else {
      this.productService.saveProduct(this.product).subscribe(() => this.snackBar.open('Producto modificado satisfactoriamente', 'Ok'),
        () => this.snackBar.open(`No se pudo modificar el producto con id: ${this.product._id}`));
    }
  }

}
