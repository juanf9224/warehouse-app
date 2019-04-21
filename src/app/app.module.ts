import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';

import { CheckoutComponent } from './checkout/checkout.component';
import { MainMenuComponent } from './shared/layout/menu/main-menu/main-menu.component';
import { MaterialDesignCustomModule } from './shared/modules/material-design/material-design.module';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductMaintenanceComponent } from './product-maintenance/product-maintenance.component';
import {DialogUtilComponent} from './shared/util/dialog.util';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialDesignCustomModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    CheckoutComponent,
    MainMenuComponent,
    ProductMaintenanceComponent,
    DialogUtilComponent
  ],
  entryComponents: [
    DialogUtilComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
