import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

import { IProductModel } from "../models/product.model";
import { productsUrl } from "../../core/helpers/constants";



@Injectable({
  providedIn: 'root'
})
export class ProductsPromiseService {

  constructor(private http: HttpClient) {}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getProducts(): Promise<IProductModel[]> {
    const request$ = this.http.get<IProductModel[]>(productsUrl);
    return firstValueFrom(request$)
      .then(response => response)
      .catch(this.handleError);
  }

  getProduct(id: IProductModel['id'] | string): Promise<IProductModel> {
    const request$ = this.http.get<IProductModel>(`${productsUrl}/${id}`)
    return firstValueFrom(request$)
      .then(response => response)
      .catch(this.handleError);
  }

  updateProduct(product: IProductModel): Promise<IProductModel> {
    const request$ = this.http.put<IProductModel>(productsUrl, product)

    return firstValueFrom(request$)
      .then(product => product)
      .catch(this.handleError);
  }

  createProduct(product: IProductModel): Promise<IProductModel> {
    const request$ = this.http.post<IProductModel>(productsUrl, product)

    return firstValueFrom(request$)
      .then(product => product)
      .catch(this.handleError);
  }

  deleteProduct(id: IProductModel['id'] | string): Promise<unknown> {
    const request$ = this.http.delete(`${productsUrl}/${id}`)
    return firstValueFrom(request$)
      .catch(this.handleError);
  }
}
