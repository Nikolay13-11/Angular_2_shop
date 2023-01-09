import { Injectable } from '@angular/core';

import {IProductModel} from "../../products/models/product.model";
import {ICartModel} from "../models/cart.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: ICartModel[] = []

  getCart(): ICartModel[] {
    return this.cart
  }

  addProductToCart(product: IProductModel): void {
    const isInCart = this.cart.some(el => el.id === product.id)
    if(isInCart) {
      const index = this.cart.findIndex(el => el.id === product.id)
      this.cart[index].count++;
      return;
    }

    this.cart.push({
      ...product,
      count: 1
    })
  }

  deleteFromCart(id: string): void {
    this.cart = this.cart.filter(product => product.id !== id)
  }

  onQuantityIncrease(id: string): void {
    const index = this.cart.findIndex(el => el.id === id)
    this.cart[index].count++
  }

  onQuantityDecrease(id: string): void {
    const index = this.cart.findIndex(el => el.id === id)
    if(this.cart[index].count > 1) {
      this.cart[index].count--;
      return;
    }
    this.deleteFromCart(id)
  }

  getTotalCost(): number {
    return +this.cart.reduce((acc, curr) => acc += (curr.cost * curr.count), 0).toFixed(2);
  }

  getTotalQuantity(): number {
    return this.cart.length
  }
}
