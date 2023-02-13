import {Component, OnDestroy, OnInit} from '@angular/core';
import { Location } from "@angular/common";
import {ActivatedRoute, ParamMap} from "@angular/router";

import { IProductModel } from "../../models/product.model";
import { ProductsService } from "../../services/products-service.service";
import {Subject, takeUntil} from "rxjs";
import {CartService} from "../../../cart/services/cart.service";


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
    private productsService: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe(
        (params: ParamMap) => this.product = this.productsService.getProductById(params.get('productID'))
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
