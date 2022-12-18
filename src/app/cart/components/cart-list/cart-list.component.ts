import { Component, OnInit } from '@angular/core';

import { CartService } from "../../services/cart.service";
import { IProductModel } from "../../../products/models/product.model";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  panelOpenState: boolean = false;
  cart: IProductModel[] = [];

  constructor(private CartService: CartService) {}

  ngOnInit() {
    this.cart = this.CartService.getCart();
  }

  get summ() {
    return this.cart.reduce((acc, curr) => acc += curr.cost, 0).toFixed(2);
  }

  trackByFn(index: number, item: IProductModel) {
    return item.id;
  }
}
