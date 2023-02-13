import { NgModule } from '@angular/core';

import { ProductComponent, ProductListComponent } from "./components";
import { SharedModule } from "../shared/shared.module";
import { ProductsRoutingModule } from "./products-routing.module";



@NgModule({
  declarations: [ProductComponent, ProductsRoutingModule.components],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  exports: [ProductListComponent, ProductComponent],
})
export class ProductsModule { }
