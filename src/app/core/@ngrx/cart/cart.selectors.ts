import { createFeatureSelector, createSelector } from "@ngrx/store";

import { cartFeatureKey } from "../app.state";
import { CartState } from "./cart.state";


export const selectCartState = createFeatureSelector<CartState>(cartFeatureKey);

export const selectCartData = createSelector(selectCartState, (state: CartState) => state.data);
export const selectCartError = createSelector(selectCartState, (state: CartState) => state.error);

export const selectCartDataSize = createSelector(selectCartState, (state: CartState) => state.data.length);
export const selectCartDataTotalCost = createSelector(selectCartState, (state: CartState) => +(state.data.reduce(
  (acc, curr) => acc += (curr.cost * curr.count), 0
).toFixed(2)));

export const selectCartDataIsEmpty = createSelector(selectCartState, (state: CartState) => state.data.length > 0);
export const selectCartDataIds = createSelector(selectCartState, (state: CartState) => state.data.map(product => product.id));
