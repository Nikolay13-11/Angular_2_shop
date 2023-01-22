import { Injectable } from '@angular/core';

import { IProductModel } from "../models/product.model";
import { products } from "./productsDb";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Promise<IProductModel[]> {
    return Promise.resolve(products);
  }
}
