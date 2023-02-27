import { Pipe, PipeTransform } from '@angular/core';

import { ICartModel } from "../../cart/models/cart.model";

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(productList?: ICartModel[], key: keyof ICartModel = 'count', isAsc: boolean = false): ICartModel[] {
    if(productList) {
      if(key === 'cost') {
        return productList.sort((a, b) =>
          isAsc ? (a.cost * a.count) - (b.cost * b.count) :  (b.cost * b.count) - (a.cost * a.count)
        );
      }

      if(isAsc) {
        return productList.sort((a: any, b: any) => a[key] < b[key] ? -1 : 1);
      }
      return productList.sort((a: any, b: any) => a[key] > b[key] ? -1 : 1);
    }
    return []
  }

}
