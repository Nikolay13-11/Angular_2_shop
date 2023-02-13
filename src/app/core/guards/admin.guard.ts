import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate, Resolve,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from "../services/login.service";

import { CanComponentDeactivate } from "../models/can-component-deactivate.interface";
import { IProductModel } from "../../products/models/product.model";
import { ProductsService } from "../../products/services/products-service.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanDeactivate<CanComponentDeactivate>, Resolve<IProductModel> {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private  loginService: LoginService,
    private router: Router,
    private productsService: ProductsService,
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

    const id = route.paramMap.get('productID')!;

    const product = this.productsService.getProductById(id);

    if(product) {
      return product;
    }

    return {} as IProductModel;

  }

  private checkAdminState() {
    if(this.isLoggedIn && this.isAdmin){
      return true;
    }

    this.router.navigate(['/404'])

    return false;
  }
}
