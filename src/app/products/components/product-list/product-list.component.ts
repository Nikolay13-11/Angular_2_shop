import {Component, OnInit} from '@angular/core';

import { IProductModel } from "../../models/product.model";
import { CartService } from "../../../cart/services/cart.service";
import {ProductsPromiseService} from "../../services/products-promise.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: Promise<IProductModel[]>;

  constructor(
    private productsPromiseService: ProductsPromiseService,
    private cartService: CartService,
  ) {};

  ngOnInit() {
    this.products = this.productsPromiseService.getProducts();
  };

  addProductToCart(product: IProductModel) {
    this.cartService.addProduct(product);
  };

}
