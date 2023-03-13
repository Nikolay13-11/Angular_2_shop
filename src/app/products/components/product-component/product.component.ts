import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { IProductModel } from "../../models/product.model";

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges {
  @Input() product!: IProductModel;
  @Input() cartIds!: ReadonlyArray<number>;

  @Output() addProductToCart = new EventEmitter<IProductModel>();

  inCart = false;

  ngOnChanges() {
    this.inCart = this.cartIds?.includes(this.product.id);
  }

  onAddToCart() {
    this.addProductToCart.emit(this.product);
  }
}
