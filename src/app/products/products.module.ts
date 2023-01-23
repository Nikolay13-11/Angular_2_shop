import { NgModule } from '@angular/core';

import { ProductComponent, ProductListComponent } from "./components";
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  imports: [
    SharedModule
  ],
  exports: [ProductListComponent, ProductComponent ],
})
export class ProductsModule { }
