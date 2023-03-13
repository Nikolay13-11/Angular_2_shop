import { createAction, props } from '@ngrx/store';

import {IProductModel} from "../../../products/models/product.model";

export const getProducts = createAction('[Products List Page (App)] GET_PRODUCTS');

export const getProductsSuccess = createAction('[Get Products Effect] GET_PRODUCTS_SUCCESS', props<{products: IProductModel[]}>());

export const getProductsError = createAction(
  '[Get Products Effect] GET_PRODUCTS_ERROR',
  props<{error: Error | string | null}>());


export const getProductSuccess = createAction(
  '[Get Product Effect] GET_PRODUCT_SUCCESS',
  props<{ product: IProductModel }>()
);

export const getProductError = createAction(
  '[Get Product Effect] GET_PRODUCT_ERROR',
  props<{ error: Error | string | null }>()
);

export const getProduct = createAction(
  '[Add/Edit Product Page (App)] GET_PRODUCT',
  props<{ productId: number }>()
);

export const createProduct = createAction('[Add/Edit Product Page] CREATE_PRODUCT',
  props<{product: IProductModel}>());

export const createProductSuccess = createAction(
  '[Create Product Effect] CREATE_PRODUCT_SUCCESS',
  props<{product: IProductModel}>()
);

export const createProductError = createAction(
  '[Create Product Effect] CREATE_PRODUCT_ERROR',
  props<{error: Error | string | null}>()
);


export const updateProduct = createAction(
  '[Add/Edit Product Page] UPDATE_PRODUCT',
  props<{ product: IProductModel }>()
);

export const updateProductSuccess = createAction(
  '[Update Product Effect] UPDATE_PRODUCT_SUCCESS',
  props<{ product: IProductModel }>()
);

export const updateProductError = createAction(
  '[Update Product Effect] UPDATE_PRODUCT_ERROR',
  props<{ error: Error | string | null }>()
);

export const deleteProduct = createAction(
  '[Admin Product List Page] DELETE_PRODUCT',
  props<{ product: IProductModel }>()
);

export const deleteProductSuccess = createAction(
  '[Delete Product Effect] DELETE_PRODUCT_SUCCESS',
  props<{ product: IProductModel }>()
);

export const deleteProductError = createAction(
  '[Delete Product Effect] DELETE_PRODUCT_ERROR',
  props<{ error: Error | string | null }>()
);
