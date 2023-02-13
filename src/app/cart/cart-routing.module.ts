import { NgModule } from '@angular/core';
import { type Routes, RouterModule } from '@angular/router';
import { CartListComponent } from "./components";



const routes: Routes = [
  {
    path: '',
    component: CartListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
}
