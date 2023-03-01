import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ICartModel } from "../../models/cart.model";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() product!: ICartModel;
  @Output() deleteId = new EventEmitter<number>();
  @Output() increaseProduct = new EventEmitter<ICartModel>();
  @Output() decreaseProduct = new EventEmitter<ICartModel>();

  onDeleteItem(id: number): void {
      this.deleteId.emit(id);
  };

  onQuantityIncrease(product: ICartModel): void {
    this.increaseProduct.emit(product);
  };

  onQuantityDecrease(product: ICartModel): void {
    this.decreaseProduct.emit(product);
  };
}
