import { Injectable } from '@angular/core';

import {IProductModel} from "../../products/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: IProductModel[] = [
    {
      id: '1',
      title: 'Apeks XTX 200 DIN Octopus XTX 40 Regulator Set',
      description: 'The XTX200 is the flagship of the Apeks regulator range and the definitive blend of style and high performance. Every detail has been carefully designed to offer a regulator of the highest quality.',
      imageUrl: 'https://www.tradeinn.com/f/7/78556/apeks-xtx-200-din-octopus-xtx-40-regulator-set.jpg',
      cost: +(Math.random() * 2000).toFixed(2),
      currency: 'USD'
    },
    {
      id: '2',
      title: 'Scubapro Jet Diving Fins',
      description: 'SCUBAPRO Jet Fins have a long and celebrated history of performance. They set the standard for power and durability in 1965, and are still immensely popular today.',
      imageUrl: 'https://www.tradeinn.com/f/0/4307/scubapro-jet-diving-fins.jpg',
      cost: +(Math.random() * 2000).toFixed(2),
      currency: 'USD'
    },
  ]

  getCart(): IProductModel[] {
    return this.cart
  }
}
