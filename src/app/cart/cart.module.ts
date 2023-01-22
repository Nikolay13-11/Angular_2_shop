import { NgModule } from '@angular/core';

import { SharedModule } from "../shared/shared.module";
import { CartItemComponent, CartListComponent } from "./components";



@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [
    SharedModule
  ],
  exports: [CartListComponent]
})
export class CartModule { }
