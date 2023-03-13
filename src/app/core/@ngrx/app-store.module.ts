import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { RouterState, StoreRouterConnectingModule } from "@ngrx/router-store";
import { RouterEffects, routerReducers } from "./router";

import { ProductsStoreModule } from "./products/products.module";
import { CartStoreModule } from "./cart/cart.module";




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(routerReducers, {}),
    EffectsModule.forRoot([RouterEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true // Pauses recording actions and state changes when the extension window is not open
    }),
    ProductsStoreModule,
    CartStoreModule,
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
    }),
  ]
})
export class AppStoreModule { }
