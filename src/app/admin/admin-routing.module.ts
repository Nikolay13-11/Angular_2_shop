import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AddProductComponent,
  AdminComponent,
  EditProductComponent,
  OrdersComponent,
  ProductsComponent
} from "./components";

import { AdminGuard } from "../core/guards";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'product',
        children: [
          {
            path: 'add',
            component: AddProductComponent
          },
          {
            path: 'edit/:productID',
            canDeactivate: [AdminGuard],
            resolve: {
              product: AdminGuard
            },
            component: EditProductComponent
          },
        ]
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [AdminComponent, AddProductComponent, EditProductComponent, OrdersComponent, ProductsComponent]
}
