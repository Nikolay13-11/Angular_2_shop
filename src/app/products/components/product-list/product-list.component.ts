import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable, Subject, takeUntil } from "rxjs";

import { Store } from "@ngrx/store";
import { selectProductsData } from "../../../core/@ngrx/products";
import { selectCartDataIds } from "../../../core/@ngrx/cart";

import * as CartActions from "../../../core/@ngrx/cart";
import * as ProductsActions from "../../../core/@ngrx/products";
import * as RouterActions from "../../../core/@ngrx/router";

import { IProductModel } from "../../models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products$!: Observable<ReadonlyArray<IProductModel>>;
  cartIds$!: ReadonlyArray<number>;
  tasksError$!: Observable<Error | string | null>;
  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private store: Store
  ) {};

  ngOnInit() {
    this.products$ = this.store.select(selectProductsData);
    this.store.select(selectCartDataIds)
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(ids => this.cartIds$ = ids);
    this.store.dispatch(ProductsActions.getProducts());
  };

  ngOnDestroy() {
    this.unsubscribe$.complete()
  }

  addProductToCart(product: IProductModel) {
    if(!this.cartIds$.includes(product.id)) {
      this.store.dispatch(CartActions.createCartProduct({
        product: {
          ...product,
          count: 1
        }
      }));
      return;
    }

    this.store.dispatch(RouterActions.go({
      path: ['/cart']
    }));
  };
}
