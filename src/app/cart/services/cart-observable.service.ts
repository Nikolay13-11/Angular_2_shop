import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError, share, retry } from "rxjs";

import { cartUrl } from "../../core/helpers/constants";

import { ICartModel } from "../models/cart.model";



@Injectable({
  providedIn: 'root'
})
export class CartObservableService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));

  }

  getProducts(): Observable<ICartModel[]> {
    return this.http.get<ICartModel[]>(cartUrl).pipe(
      retry(3),
      share(),
      catchError(this.handleError)
    );
  }

  getProduct(id: ICartModel['id'] | string): Observable<ICartModel> {
    return this.http.get<ICartModel>(`${cartUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  updateProduct(product: ICartModel): Observable<ICartModel> {
    return this.http.put<ICartModel>(`${cartUrl}/${product.id}`, product).pipe(
      catchError(this.handleError)
    );
  }

  addProduct(product: ICartModel): Observable<ICartModel> {
    return this.http.post<ICartModel>(cartUrl, product).pipe(
      catchError(this.handleError)
    );
  }

  deleteProduct(id: ICartModel['id'] | string) {
    return this.http.delete(`${cartUrl}/${id}`);
    // ToDo check double request problem and use concatMap and return all products instead of separate request getProducts
    //   .pipe(
    //   concatMap(() => this.getProducts()),
    //   catchError(this.handleError)
    // );
  }
}
