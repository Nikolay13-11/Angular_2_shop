import {Component} from '@angular/core';

import { CartService } from "../../services/cart.service";
import { IProductModel } from "../../../products/models/product.model";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  panelOpenState: boolean = false;
  colorForHover = 'linear-gradient(5deg, rgba(19,93,189,1) 17%, rgba(195,30,6,0.9612219887955182) 78%)';

  constructor(public cartService: CartService) {}


  trackByFn(index: number, item: IProductModel) {
    return item.id;
  }

  onDeleteItem(id: string) {
    this.cartService.deleteFromCart(id)
  }

  onQuantityIncrease(id: string) {
    this.cartService.onQuantityIncrease(id)
  }

  onQuantityDecrease(id: string) {
    this.cartService.onQuantityDecrease(id)
  }
}
