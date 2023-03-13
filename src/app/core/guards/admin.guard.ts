import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate, Resolve,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

import { Store } from "@ngrx/store";
import { selectSelectedProductByUrl } from "../@ngrx/products";

import { LoginService } from "../services/login.service";

import { CanComponentDeactivate } from "../models/can-component-deactivate.interface";
import { IProductModel } from "../../products/models/product.model";
import { ProductsPromiseService } from "../../products/services/products-promise.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanDeactivate<CanComponentDeactivate>, Resolve<IProductModel> {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private productsPromiseService: ProductsPromiseService,
    private store: Store
  ) {
    this.loginService.isIsAdmin.subscribe(value => this.isAdmin = value);
    this.loginService.isLoggedIn.subscribe(value => this.isLoggedIn = value);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('CanActivate Guard is called');
    return this.checkAdminState();
  }

  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('CanDeactivate Guard is called');
    return component.canDeactivate?.() ?? true;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProductModel> | Promise<IProductModel> | IProductModel {
    console.log('UserResolve Guard is called');

    if (!route.paramMap.has('productID')) {
      return {} as IProductModel;
    }

    return this.store.select(selectSelectedProductByUrl)
      .pipe(
        switchMap(product => {
          if (product) {
            return of(product)
          }
          return of({} as IProductModel)
        })
      );
  }

  private checkAdminState() {
    if(this.isLoggedIn && this.isAdmin){
      return true;
    }

    this.router.navigate(['/404'])

    return false;
  }
}
