import { Pipe, PipeTransform } from '@angular/core';

import { ICartModel } from "../../cart/models/cart.model";

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(productList?: ReadonlyArray<ICartModel>, key: keyof ICartModel = 'count', isAsc: boolean = false): ICartModel[] {
    if(productList) {
      const copy = [...productList]
      if(key === 'cost') {
        return copy.sort((a, b) =>
          isAsc ? (a.cost * a.count) - (b.cost * b.count) :  (b.cost * b.count) - (a.cost * a.count)
        );
      }

      if(isAsc) {
        return copy.sort((a: any, b: any) => a[key] < b[key] ? -1 : 1);
      }
      return copy.sort((a: any, b: any) => a[key] > b[key] ? -1 : 1);
    }
    return []
  }

}
