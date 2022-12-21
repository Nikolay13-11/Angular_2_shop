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

  constructor(private сartService: CartService) {}

  ngOnInit() {
    this.cart = this.сartService.getCart();
  }

  // такой метод, думаю, лучше в сервис вынести, компонент будет чище
  get summ() {
    return this.cart.reduce((acc, curr) => acc += curr.cost, 0).toFixed(2);
  }

  trackByFn(index: number, item: IProductModel) {
    return item.id;
  }
}
