import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './products.effects';

import { productsFeatureKey } from "../app.state";
import { productsReducer } from "./products.reducer";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(productsFeatureKey, productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ]
})
export class ProductsStoreModule { }
