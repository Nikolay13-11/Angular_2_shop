import { ICartModel } from "../../../cart/models/cart.model";

export interface CartState {
  data: ReadonlyArray<ICartModel>;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string | null;
}


export const initialProductsState: CartState = {
  data: [],
  loading: false,
  loaded: false,
  error: null
}
