import { ProductsState } from "./products";
import { CartState } from "./cart";


export const productsFeatureKey = 'products';
export const cartFeatureKey = 'cart';

export interface AppState {
  [productsFeatureKey]: ProductsState,
  [cartFeatureKey]: CartState,
}
