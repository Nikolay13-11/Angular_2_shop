import { createFeatureSelector, createSelector } from "@ngrx/store";

import { ProductsState } from "./products.state";

import { productsFeatureKey } from "../app.state";
import { selectRouteParams } from "../router";

import { IProductModel } from "../../../products/models/product.model";


export const selectProductsState = createFeatureSelector<ProductsState>(productsFeatureKey);

export const selectProductsData = createSelector(selectProductsState, (state: ProductsState) => state.data);

export const selectProductsError = createSelector(selectProductsState, (state: ProductsState) => state.error);

export const selectSelectedProductByUrl = createSelector(
  selectProductsData,
  selectRouteParams,
  (products, params): IProductModel | undefined => {
    const productID = params['productID'];

    if (productID) {
      return products.find(product => product.id === +productID);
    }

    return undefined;
  });


