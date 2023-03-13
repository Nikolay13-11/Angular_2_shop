import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, switchMap, map, concatMap } from "rxjs";
import { type Action } from '@ngrx/store';

import { ProductsPromiseService } from "../../../products/services/products-promise.service";

import * as ProductsActions from './products.actions';

import { IProductModel } from "../../../products/models/product.model";



@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private productPromiseService: ProductsPromiseService
  ) {}

  getProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.getProducts),
      switchMap(action =>
      this.productPromiseService
          .getProducts()
          .then(products => ProductsActions.getProductsSuccess({ products }))
          .catch(error => ProductsActions.getProductsError({ error })))
    )
  );

  getProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.getProduct),
      map(action => action.productId),
      switchMap(productId =>
        this.productPromiseService
          .getProduct(productId)
          .then(product => ProductsActions.getProductSuccess({ product }))
          .catch(error => ProductsActions.getProductError({ error })))
    )
  );

  updateProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.updateProduct),
      map(action => action.product),
      concatMap((product: IProductModel) =>
        this.productPromiseService
          .updateProduct(product)
          .then((updatedTask: IProductModel) => {
            return ProductsActions.updateProductSuccess({ product: updatedTask });
          })
          .catch(error => ProductsActions.updateProductError({ error }))
      )
    )
  );

  createProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.createProduct),
      map(action => action.product),
      concatMap((product: IProductModel) =>
        this.productPromiseService
          .createProduct(product)
          .then((createProduct: IProductModel) => {
            return ProductsActions.createProductSuccess({ product: createProduct });
          })
          .catch(error => ProductsActions.createProductError({ error }))
      )
    )
  );


  deleteProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.deleteProduct),
      map(action => action.product),
      concatMap((product: IProductModel) =>
      this.productPromiseService.deleteProduct(product.id)
        .then(() => {
          return ProductsActions.deleteProductSuccess({product});
        })
        .catch(error => ProductsActions.deleteProductError({error}))
      )
    )
  );
}
