import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent, ProductListComponent } from "./components";
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ProductListComponent, ProductComponent ],
})
export class ProductsModule { }
