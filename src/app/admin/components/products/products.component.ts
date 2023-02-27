import {Component, OnInit} from '@angular/core';

import { IProductModel } from "../../../products/models/product.model";
import {ProductsPromiseService} from "../../../products/services/products-promise.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'cost', 'isAvailable', 'edit', 'delete'];
  dataSource!: IProductModel[];

  constructor(private productsPromiseService: ProductsPromiseService) {}

  ngOnInit() {
    this.productsPromiseService.getProducts().then(products => this.dataSource = products);
  }

  onDeleteProduct(id: number) {
    this.productsPromiseService.deleteProduct(id)
      .then(() => this.productsPromiseService.getProducts()
        .then(product => this.dataSource = product))
      .catch(err => console.log(err));
  }
}
