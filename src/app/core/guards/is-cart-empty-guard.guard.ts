import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { combineLatest, Observable, of, switchMap } from 'rxjs';

import { Store } from "@ngrx/store";
import { selectCartDataIsEmpty, selectCartDataTotalCost } from "../@ngrx/cart";

@Injectable({
  providedIn: 'root'
})
export class IsCartEmptyGuardGuard implements  CanActivate {

  constructor(private store: Store) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Can Activate guard was called');
    return this.checkCart();
  }

  private checkCart(): Observable<boolean> {
    return combineLatest(this.store.select(selectCartDataIsEmpty), this.store.select(selectCartDataTotalCost))
      .pipe(
        switchMap(([isEmpty, cost]) => {
          return of(isEmpty && cost > 0)
        })
      );
  }
}
