import {Component, Input} from '@angular/core';

import {IProductModel} from "../../models/product.model";

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponentComponent {
  @Input() product!: IProductModel

  onAddToCart() {
    console.log('Thank you for purchase! ')
  }
}
