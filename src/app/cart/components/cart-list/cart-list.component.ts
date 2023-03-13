import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from "rxjs";

import { AppSettingsService } from "../../../core/services/app-settings.service";
import { sortOptions } from "../../../core/helpers/constants";

import { Store } from "@ngrx/store";
import { selectCartData, selectCartDataTotalCost } from "../../../core/@ngrx/cart";

import * as CartActions from '../../../core/@ngrx/cart';
import * as RouterActions from '../../../core/@ngrx/router';

import { IProductModel } from "../../../products/models/product.model";
import { SortOptions } from "../../../core/models/constant.model";
import { ICartModel } from "../../models/cart.model";


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
  colorForHover = 'linear-gradient(5deg, rgba(19,93,189,1) 17%, rgba(195,30,6,0.9612219887955182) 78%)';
  selectedValue!: keyof ICartModel;

  selectOptions: SortOptions = sortOptions;
  direction = false;

  products$!: Observable<ReadonlyArray<ICartModel>>;
  cartTotalCost$!: Observable<number>;

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private appSettingsService: AppSettingsService,
    private store: Store,
  ) {}

  ngOnInit() {
    this.products$ = this.store.select(selectCartData);
    this.cartTotalCost$ = this.store.select(selectCartDataTotalCost);
    this.appSettingsService.getSortSettings().pipe(
      takeUntil(this.unsubscribe)
    )
      .subscribe(
        settings => {
          this.direction = settings.direction;
          this.selectedValue = settings.order;
        }
      )
  }

  ngOnDestroy() {
    this.unsubscribe.complete();
  }

  trackByFn(index: number, item: IProductModel) {
    return item.id;
  }

  onDeleteItem(product: ICartModel) {
    this.store.dispatch(CartActions.deleteCartProduct({product}));
  }

  onQuantityIncrease(product: ICartModel) {
    this.store.dispatch(CartActions.updateCartProduct({
      product: {
        ...product,
        count: product.count + 1
      }
    }));
  }

  onQuantityDecrease(product: ICartModel) {
    if(product.count > 0) {
      this.store.dispatch(CartActions.updateCartProduct({
        product: {
          ...product,
          count: product.count - 1
        }
      }));
    }
  }

  navigate() {
    this.store.dispatch(RouterActions.back());
  }
}
