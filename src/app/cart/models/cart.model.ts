import {IProductModel} from "../../products/models/product.model";

export interface ICartModel extends IProductModel {
  count: number;
}
