import {Component, OnDestroy, OnInit} from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subject, takeUntil } from "rxjs";

import { CartService } from "../../../cart/services/cart.service";
import { ProductsPromiseService } from "../../services/products-promise.service";

import { IProductModel } from "../../models/product.model";


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit, OnDestroy {
  product!: IProductModel | undefined;
  private unsubscribe: Subject<void> = new Subject();
  constructor(
    private location: Location,
    private productsPromiseService: ProductsPromiseService,
    private cartService: CartService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe(
        (params: ParamMap) => this.productsPromiseService.getProduct(Number(params.get('productID')))
          .then(product => this.product = product)
      )
  }

  ngOnDestroy() {
    this.unsubscribe.complete();
  }

  onGoBack() {
    this.location.back();
  }

  onAddToCart() {
    if(this.product) {
      this.cartService.addProduct(this.product);
    }
  }
}
