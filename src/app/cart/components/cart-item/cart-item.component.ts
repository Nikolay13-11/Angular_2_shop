import { Component, EventEmitter, Input, Output} from '@angular/core';

import { ICartModel } from "../../models/cart.model";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() product!: ICartModel;
  @Output() deleteId = new EventEmitter<string>();
  @Output() increaseId = new EventEmitter<string>();
  @Output() decreaseId = new EventEmitter<string>();

  onDeleteItem(id: string) {
      this.deleteId.emit(id)
  };

  onQuantityIncrease(id: string) {
    this.increaseId.emit(id)
  };

  onQuantityDecrease(id: string) {
    this.decreaseId.emit(id)
  };
}
