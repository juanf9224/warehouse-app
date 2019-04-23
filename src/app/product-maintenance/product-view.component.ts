import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

import { IProductDetail } from '../product-list/product-detail/product-detail.model';
import {ProductService} from '../providers/product/product.service';
import {DataSource} from '@angular/cdk/table';

@Component({
  selector: 'app-product-maintenance-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductMaintenanceViewComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'quantity', 'edit'];
  products: IProductDetail[];
  dataSource: MatTableDataSource<IProductDetail>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    this.loadAll();
  }

  private loadAll() {
    this.productService.findAll()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource<IProductDetail>(res.body);
        this.dataSource.paginator = this.paginator;
        },
        () => this.snackBar.open('No se puedieron cargar los productos', 'Ok'));
  }

  updateProduct(id: string) {
    this.router.navigate(['product-maintenance', id]);
  }
}
