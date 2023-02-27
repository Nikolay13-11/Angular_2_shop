import { Component, OnDestroy, OnInit} from '@angular/core';
import { Observable, Subject, takeUntil } from "rxjs";

import { CartService } from "../../services/cart.service";
import { CartObservableService } from "../../services/cart-observable.service";
import { AppSettingsService } from "../../../core/services/app-settings.service";
import { sortOptions } from "../../../core/helpers/constants";

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

  products$!: Observable<ICartModel[]>;

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    public cartService: CartService,
    private cartObservableService: CartObservableService,
    private appSettingsService: AppSettingsService,

  ) {}

  ngOnInit() {
    this.products$ = this.cartService.getProducts();
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

  onDeleteItem(id: number) {
    this.cartObservableService.deleteProduct(id).subscribe();
    this.products$ = this.cartService.getProducts();
  }

  onQuantityIncrease(product: ICartModel) {
    this.cartService.onQuantityIncrease(product);
  }

  onQuantityDecrease(product: ICartModel) {
    const flag = this.cartService.onQuantityDecrease(product);
    if(flag) {
      this.products$ = this.cartService.getProducts();
    }
  }
}
