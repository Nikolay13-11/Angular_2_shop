import { Injectable } from '@angular/core';
import { Observable, switchMap, map, concatMap, catchError, of } from "rxjs";

import { type Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as CartActions from './cart.actions';

import { CartObservableService } from "../../../cart/services/cart-observable.service";

import { ICartModel } from "../../../cart/models/cart.model";



@Injectable()
export class CartEffects {


  constructor(
    private actions$: Actions,
    private cartObservableService: CartObservableService
  ) {}

  getCart$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.getCart),
      switchMap(action =>
      this.cartObservableService
          .getProducts()
        .pipe(
          map(products => CartActions.getCartSuccess({products})),
          catchError(error => of(CartActions.getCartError({error})))
        )
      )
    )
  );

  updateCartProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.updateCartProduct),
      map(action => action.product),
      concatMap((product: ICartModel) =>
        this.cartObservableService
          .updateProduct(product)
          .pipe(
            map(updatedProduct => {
              return CartActions.updateCartProductSuccess({product: updatedProduct})
            }),
            catchError(error => of(CartActions.updateCartProductError({error})))
          )
      )
    )
  );

  createCartProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.createCartProduct),
      map(action => action.product),
      concatMap((product: ICartModel) =>
        this.cartObservableService
          .addProduct(product)
          .pipe(
            map(createdProduct => {
              return CartActions.createCartProductSuccess({product: createdProduct})
            }),
            catchError(error => of(CartActions.createCartProductError({error})))
          )
      )
    )
  );


  deleteCartProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.deleteCartProduct),
      map(action => action.product),
      concatMap((product: ICartModel) =>
        this.cartObservableService
          .deleteProduct(product.id)
          .pipe(
            map(() => {
              return CartActions.deleteCartProductSuccess({product})
            }),
            catchError(error => of(CartActions.deleteCartProductError({error})))
          )
      )
  ))
}
