import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";

import { Dialog } from "@angular/cdk/dialog";

import { SharedModule } from "../../../shared/shared.module";
import { LoginService } from "../../services/login.service";

import { LoginComponent } from "../login/login.component";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectCartDataSize } from "../../@ngrx/cart";

import * as CartActions from '../../@ngrx/cart';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [SharedModule, RouterModule, LoginComponent]
})
export class HeaderComponent {
  cartSize$!: Observable<number>;

  constructor(
    public dialog: Dialog,
    public loginService: LoginService,
    private store: Store
  ) {
    this.cartSize$ = this.store.select(selectCartDataSize);
    this.store.dispatch(CartActions.getCart());
  }

  openDialog(): void {
    const dialogRef = this.dialog.open<string>(LoginComponent, {
      width: '250px',
    });

    dialogRef.closed.subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
