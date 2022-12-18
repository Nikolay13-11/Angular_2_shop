import { Injectable } from '@angular/core';
import {IProductModel} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: IProductModel[] = [
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
    {
      id: '3',
      title: 'Ratio Ix3M2 Tech+ Computer',
      description: 'Ix3M2 Tech+ Computer. Air, Nitrox, Trimix, CCR, 10 mix, Multi Air Integrated, Huge color display, Vibration Alarm.All new User Interface with LSK, 4 Deco Algorithms, Deco Table during the dive, Compass and more.',
      imageUrl: 'https://www.tradeinn.com/f/7/78556/apeks-xtx-200-din-octopus-xtx-40-regulator-set.jpg',
      cost: +(Math.random() * 2000).toFixed(2),
      currency: 'USD'
    },
    {
      id: '4',
      title: 'SEAC Modular REV BCD',
      description: 'For those who have not yet dared to practice recreational diving, the new MODULAR REV vest will make it easier to do the job in the water. It is a very simple equipment to use, store and transfer.',
      imageUrl: 'https://www.tradeinn.com/f/13709/137090237/seac-modular-rev-bcd.jpg',
      cost: +(Math.random() * 2000).toFixed(2),
      currency: 'USD'
    },
    {
      id: '5',
      title: 'Cressi Calibro Mirror Spearfishing Mask',
      description: 'CALIBRO provides a group of technical advantages that Cressi has been incorporating in the last seasons in different models. It combines a great technicality with a captivating design and medium dimensions, both of the frame and of the skirt. Its exclusive structure integrates the frame in the skirt instead of overlapping them. This exclusive construction system, that allows great lightness (118 g), reduces to the absolutely minimum the thickness improving also the internal volume, the visibility and the adaptation of the mask.',
      imageUrl: 'https://www.tradeinn.com/f/13645/136450927/cressi-calibro-mirror-spearfishing-mask.jpg',
      cost: +(Math.random() * 2000).toFixed(2),
      currency: 'USD'
    },
  ]

  getProducts(): IProductModel[] {
    return this.products;
  }
}
