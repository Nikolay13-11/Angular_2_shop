import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';

import { cartFeatureKey } from "../app.state";
import { cartReducer } from "./cart.reducer";
import { CartEffects } from './cart.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(cartFeatureKey, cartReducer),
    EffectsModule.forFeature([CartEffects]),
  ]
})
export class CartStoreModule { }
