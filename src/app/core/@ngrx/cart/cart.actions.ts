import { createAction, props } from '@ngrx/store';

import { ICartModel } from "../../../cart/models/cart.model";

export const getCart = createAction('[Cart Page (App)] GET_CART');

export const getCartSuccess = createAction('[Get Products Effect] GET_CART_SUCCESS', props<{products: ICartModel[]}>());

export const getCartError = createAction(
  '[Get Cart Effect] GET_CART_ERROR',
  props<{error: Error | string | null}>());


export const createCartProduct = createAction('[Products List Page] ADD_PRODUCT_TO_CART',
  props<{product: ICartModel}>());

export const createCartProductSuccess = createAction(
  '[Create Cart Product Effect] CREATE_CART_PRODUCT_SUCCESS',
  props<{product: ICartModel}>()
);

export const createCartProductError = createAction(
  '[Create Cart Product Effect] CREATE_CART_PRODUCT_ERROR',
  props<{error: Error | string | null}>()
);


export const updateCartProduct = createAction(
  '[Cart Page] UPDATE_CART_PRODUCT',
  props<{ product: ICartModel }>()
);


export const updateCartProductSuccess = createAction(
  '[Update Cart Product Effect] UPDATE_CART_PRODUCT_SUCCESS',
  props<{ product: ICartModel }>()
);

export const updateCartProductError = createAction(
  '[Update Cart Product Effect] UPDATE_CART_PRODUCT_ERROR',
  props<{ error: Error | string | null }>()
);

export const deleteCartProduct = createAction(
  '[Cart Page] DELETE_CART_PRODUCT',
  props<{ product: ICartModel }>()
);

export const deleteCartProductSuccess = createAction(
  '[Delete Cart Product Effect] DELETE_CART_PRODUCT_SUCCESS',
  props<{ product: ICartModel }>()
);

export const deleteCartProductError = createAction(
  '[Delete Product Effect] DELETE_CART_PRODUCT_ERROR',
  props<{ error: Error | string | null }>()
);


