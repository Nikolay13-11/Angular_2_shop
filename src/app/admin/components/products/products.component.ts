import {Component, OnInit} from '@angular/core';

import { ProductsService } from "../../../products/services/products-service.service";
import { IProductModel } from "../../../products/models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'cost', 'isAvailable', 'edit'];
  dataSource!: IProductModel[];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().then(products => this.dataSource = products);
  }

}
