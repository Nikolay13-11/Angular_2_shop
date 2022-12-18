import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/components/header/header.component';
import { CartModule } from "./cart/cart.module";
import { ProductsModule } from "./products/products.module";
import { OrdersModule } from "./orders/orders.module";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    CartModule,
    ProductsModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
