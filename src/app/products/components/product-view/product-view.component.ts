import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subject, takeUntil } from "rxjs";

import { Store } from "@ngrx/store";
import { selectSelectedProductByUrl } from "../../../core/@ngrx/products";

import { selectCartDataIds } from "../../../core/@ngrx/cart";

import * as CartActions from "../../../core/@ngrx/cart";
import * as RouterActions from "../../../core/@ngrx/router";

import { IProductModel } from "../../models/product.model";


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit, OnDestroy {
  product!: Readonly<IProductModel> | undefined;
  cartIds!: ReadonlyArray<number>;
  inCart = false;

  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private store: Store
  ) {}

  ngOnInit() {
    combineLatest([this.store.select(selectSelectedProductByUrl), this.store.select(selectCartDataIds)])
      .pipe( takeUntil(this.unsubscribe$))
      // думаю, что это правильнее делать в map или в tap
      // так как, всегда есть вероятность, что subscribe будет не тут,
      // а в другом месте
      .subscribe(([product, ids]) => {
        this.product = product;
        this.cartIds = ids;
        if(this.product && this.cartIds) {
          this.inCart = this.cartIds.includes(this.product.id)
        }
      })
  }

  ngOnDestroy() {
    this.unsubscribe$.complete();
  }

  onGoBack() {
   this.store.dispatch(RouterActions.back());
  }

  onAddToCart(product: IProductModel) {
    if(!this.cartIds.includes(product.id)) {
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
  }
}
