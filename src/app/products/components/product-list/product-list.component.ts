import {Component, OnInit} from '@angular/core';

import { ProductsService } from "../../services/products-service.service";
import { IProductModel } from "../../models/product.model";
import { CartService } from "../../../cart/services/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: IProductModel[];

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
  ) {};

  ngOnInit() {
    this.products = this.productService.getProducts();
  };

  addProductToCart(product: IProductModel) {
    this.cartService.addProduct(product);
  };

}
