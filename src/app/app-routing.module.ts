import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import {ProductListComponent} from './product-list/product-list.component';
import { ProductMaintenanceComponent } from './product-maintenance/product-maintenance.component';
import {ProductMaintenanceViewComponent} from './product-maintenance/product-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product-list',
    pathMatch: 'full'
  },
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'product-maintenance',
    component: ProductMaintenanceViewComponent
  },
  {
    path: 'product-maintenance/:id',
    component: ProductMaintenanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
