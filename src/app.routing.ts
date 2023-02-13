import { Routes } from "@angular/router";
import {
  PathNotFoundComponentComponent
} from "./app/core/components/path-not-found-component/path-not-found-component.component";
import { AdminGuard, IsCartEmptyGuardGuard } from "./app/core/guards";


export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/products-list',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./app/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./app/cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'order',
    canActivate: [IsCartEmptyGuardGuard],
    loadComponent: () => import('./app/core/components/process-order/process-order.component').then(c => c.ProcessOrderComponent)
  },
  {
    path: '**',
    component: PathNotFoundComponentComponent
  }
]
