import { createReducer, on } from '@ngrx/store';

import { initialProductsState } from "./cart.state";

import * as CartActions from './cart.actions'



export const cartReducer = createReducer(
  initialProductsState,

  on(CartActions.getCart, state => {
    return {
      ...state,
      loading: true,
    }
  }),

  on(CartActions.getCartSuccess, (state, { products }) => {
    const data = [...products];
    return {
      ...state,
      data,
      loading: false,
      loaded: true
    }
  }),

  on(CartActions.getCartError, (state, { error }) => {
    return {
      ...state,
      error,
      loading: false,
      loaded: false
    }
  }),

  on(CartActions.createCartProductSuccess, (state, { product }) => {
    const data = [...state.data, product]

    return {
      ...state,
      data
    }
  }),

  on(CartActions.updateCartProductSuccess, (state, {product}) => {
    const data = [...state.data];
    const index = data.findIndex(dataProduct => dataProduct.id === product.id);
    data[index] = {...product};

    return {
      ...state,
      data
    }
  }),

  on(CartActions.deleteCartProductSuccess, (state, {product}) => {
    const data = [...state.data].filter(dataProduct => dataProduct.id !== product.id);

    return {
      ...state,
      data
    }
  }),

  on(CartActions.createCartProductError, CartActions.updateCartProductError, CartActions.deleteCartProductError, (state, {error}) => {
    return {
      ...state,
      error
    }
  })
);
