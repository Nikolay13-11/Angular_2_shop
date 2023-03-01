import { Injectable } from '@angular/core';

import { IProductModel } from "../../products/models/product.model";
import { ICartModel } from "../models/cart.model";
import { CartObservableService } from "./cart-observable.service";
import { Observable, tap } from "rxjs";
import { LocalStorageService } from "../../core/services/local-storage.service";
import { cartLocalStorageName } from "../../core/helpers/constants";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private cartObservableService: CartObservableService,
    private localStorageService: LocalStorageService,
  ) {}

  getProducts(): Observable<ICartModel[]> {
    return this.cartObservableService.getProducts().pipe(
      tap(products => {
        const body = JSON.stringify(products);
        this.localStorageService.setValue('cart', body);
      }),
    )
  }


  addProduct(product: IProductModel): void {
    const currentCart: ICartModel[] = JSON.parse(this.localStorageService.getValue(cartLocalStorageName) || '[]');
    const index = currentCart.findIndex(cartProduct => cartProduct.id == product.id);

    if(index >= 0) {
      const targetProduct = currentCart.splice(index, 1)
      this.onQuantityIncrease(targetProduct[0]);
      return;
    }
    this.cartObservableService.addProduct({...product, count: 1}).pipe(
      tap(newProduct => {
        const productsToLocalStorage = JSON.stringify([...currentCart, newProduct]);
        this.localStorageService.setValue(cartLocalStorageName, productsToLocalStorage)
      })
    ).subscribe();
  };

  onQuantityIncrease(product: ICartModel): void {
    const currentCart: ICartModel[] = JSON.parse(this.localStorageService.getValue(cartLocalStorageName) || '[]');
    const index = currentCart.findIndex(cartProduct => cartProduct.id == product.id);

    if(index >= 0) {
      currentCart.splice(index, 1)
    }

    const updatedCountProduct = this.changeQuantity(product, 1);
    this.cartObservableService.updateProduct(updatedCountProduct).pipe(
      tap(
        updatedProduct => {
          const productsToLocalStorage = JSON.stringify([...currentCart, updatedProduct]);
          this.localStorageService.setValue(cartLocalStorageName, productsToLocalStorage)
        }
      )
    ).subscribe();
  }

  onQuantityDecrease(product: ICartModel): boolean {
    const currentCart: ICartModel[] = JSON.parse(this.localStorageService.getValue(cartLocalStorageName) || '[]');
    const index = currentCart.findIndex(cartProduct => cartProduct.id == product.id);

    if(index >= 0) {
      currentCart.splice(index, 1)
    }

    if(product.count > 1) {
      const updatedProduct = this.changeQuantity(product, -1);
      this.cartObservableService.updateProduct(updatedProduct).pipe(
        tap(
          updatedProduct => {
            const productsToLocalStorage = JSON.stringify([...currentCart, updatedProduct]);
            this.localStorageService.setValue(cartLocalStorageName, productsToLocalStorage)
          }
        )
      ).subscribe();
      return false;
    }
    this.cartObservableService.deleteProduct(product.id).subscribe();
    return true;
  };

  get totalCost(): number {
    const currentCart: ICartModel[] = JSON.parse(this.localStorageService.getValue(cartLocalStorageName) || '[]')
    return +currentCart.reduce((acc, curr) => acc += (curr.cost * curr.count), 0).toFixed(2);
  };

  get totalQuantity(): number {
    const currentCart: ICartModel[] = JSON.parse(this.localStorageService.getValue(cartLocalStorageName) || '[]')
    return currentCart.length;
  };

  isEmptyCart() {
    const currentCart: ICartModel[] = JSON.parse(this.localStorageService.getValue(cartLocalStorageName) || '[]')
    return currentCart.length > 0;
  };

  private changeQuantity(product: ICartModel, count: number): ICartModel {
    product.count += count;
    return product;
  };

}
