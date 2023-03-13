import { IProductModel } from "../../../products/models/product.model";

export interface ProductsState {
  data: ReadonlyArray<IProductModel>;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string | null;
}


export const initialProductsState: ProductsState = {
  data: [],
  loading: false,
  loaded: false,
  error: null
}
