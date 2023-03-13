import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from "rxjs";
import { Store } from "@ngrx/store";

import { selectProductsData } from "../../../core/@ngrx/products";
import * as ProductsActions from '../../../core/@ngrx/products';

import { IProductModel } from "../../../products/models/product.model";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'title', 'cost', 'isAvailable', 'edit', 'delete'];
  dataSource!: ReadonlyArray<IProductModel>;

  private unsubscribe$: Subject<void> = new Subject();

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.select(selectProductsData)
      .pipe(
      takeUntil(this.unsubscribe$)
    )
      .subscribe(data => this.dataSource = data);

  }

  ngOnDestroy() {
    this.unsubscribe$.complete();
  }

  onDeleteProduct(product: IProductModel) {
    this.store.dispatch(ProductsActions.deleteProduct({product}));
  }
}
