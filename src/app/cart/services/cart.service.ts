import { Injectable } from '@angular/core';

import { IProductModel } from "../../products/models/product.model";
import { ICartModel } from "../models/cart.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts: ICartModel[] = [];

  getProducts(): ICartModel[] {
    return this.cartProducts;
  }

  addProduct(product: IProductModel): void {
    const index = this.cartProducts.findIndex(el => el.id === product.id);

    if(index >= 0) {
      let targetProduct = this.cartProducts.splice(index, 1)[0];
      targetProduct.count++;
      this.cartProducts = [...this.cartProducts, targetProduct];
      return;
    }

    this.cartProducts = [...this.cartProducts, {
      ...product,
      count: 1
    }];
  };

  removeProduct(id: string): void {
    this.cartProducts = this.cartProducts.filter(product => product.id !== id);
  };

  onQuantityIncrease(id: string): void {
    const index = this.cartProducts.findIndex(el => el.id === id);
    const targetProduct = this.cartProducts.splice(index, 1)

    this.changeQuantity(targetProduct[0], 1)
  }

  onQuantityDecrease(id: string): void {
    const index = this.cartProducts.findIndex(el => el.id === id);

    if(this.cartProducts[index].count > 1) {
      const targetProduct = this.cartProducts.splice(index, 1);
      this.changeQuantity(targetProduct[0], -1);

      return;
    }

    this.removeProduct(id);
  };

  get totalCost(): number {
    return +this.cartProducts.reduce((acc, curr) => acc += (curr.cost * curr.count), 0).toFixed(2);
  };

  get totalQuantity(): number {
    return this.cartProducts.length;
  };

  removeAllProducts() {
    this.cartProducts = [];
  };

  isEmptyCart() {
    return this.cartProducts.length > 0;
  };

  private changeQuantity(product: ICartModel, count: number) {
    product.count += count
    this.cartProducts = [...this.cartProducts, product]
  };

}
