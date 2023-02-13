import { NgModule } from '@angular/core';

import { SharedModule } from "../shared/shared.module";
import { CartItemComponent, CartListComponent } from "./components";
import { CartRoutingModule } from "./cart-routing.module";


@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [
    SharedModule,
    CartRoutingModule
  ],
  exports: [CartListComponent]
})
export class CartModule { }
