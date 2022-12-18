import {Component, Input} from '@angular/core';

import { IProductModel } from "../../models/product.model";

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: IProductModel

  onAddToCart() {
    console.log('Thank you for purchase! ')
  }
}
