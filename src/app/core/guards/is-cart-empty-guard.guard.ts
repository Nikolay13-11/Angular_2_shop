import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {CartService} from "../../cart/services/cart.service";

@Injectable({
  providedIn: 'root'
})
export class IsCartEmptyGuardGuard implements  CanActivate {

  constructor(private cartService: CartService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Can Activate guard was called')
    return this.checkCart();
  }

  private checkCart(): boolean {
    return this.cartService.isEmptyCart();
  }
}
