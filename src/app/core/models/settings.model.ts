import { ICartModel } from "../../cart/models/cart.model";

export enum Methods {
  Get = 'GET',
  DELETE = 'DELETE',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH'
}

export interface ISettings {
  log: {
    defaultLogValues: Methods[]
  },
  sort: {
    defaultLogValues: {
      order: keyof ICartModel,
      direction: boolean
    }
  }
}
