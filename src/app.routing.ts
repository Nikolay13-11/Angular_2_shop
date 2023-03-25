import { Routes } from "@angular/router";
import { AdminGuard, IsCartEmptyGuardGuard } from "./app/core/guards";
import { PathNotFoundComponentComponent, SettingsComponent } from "./app/core/components";



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
    loadComponent: () => import('./app/order/components/process-order/process-order.component').then(c => c.ProcessOrderComponent)
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: '**',
    component: PathNotFoundComponentComponent
  }
]
