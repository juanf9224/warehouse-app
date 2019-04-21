import { Component, OnInit, Input } from '@angular/core';
import { IProductDetail } from './product-detail.model';
import {ProductService} from '../../providers/product/product.service';
import {ActivatedRoute} from '@angular/router';
import {MockImageUtil} from '../../shared/util/mock-image.util';
import {ShoppingCartService} from '../../providers/shopping-cart/shopping-cart.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {DialogUtilComponent} from '../../shared/util/dialog.util';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: IProductDetail;
  buyingQuantity = 1;
   availableQuantity = 0;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private shoppingCartService: ShoppingCartService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((data: any) => this.productService.find(data.id)
                                        .subscribe(res => {
                                          this.product = res.body;
                                          this.availableQuantity = this.product.quantity;
                                        })) ;
  }

  getImageToUse() {
    if (this.product) {
      return MockImageUtil.getImageToUse(this.product.name);
    }
  }

  addToCart() {
    if (this.availableQuantity && this.availableQuantity > 0) {
      this.shoppingCartService.cartItemsSubscription.next({ product: this.product, itemsCount: this.buyingQuantity });
      this.availableQuantity--;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogUtilComponent, {
      width: '250px',
      data: {name: this.product.quantity}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result <= this.product.quantity && result > 0) {
        this.buyingQuantity = result;
        this.addToCart();
      } else if (result > this.product.quantity) {
        this.snackBar.open('La cantidad seleccionada sobrepasa la cantidad disponible', 'OK');
      }
    });
  }
}
