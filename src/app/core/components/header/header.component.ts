import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";

import { Dialog } from "@angular/cdk/dialog";

import { SharedModule } from "../../../shared/shared.module";
import { CartService } from "../../../cart/services/cart.service";
import { LoginService } from "../../services/login.service";

import { LoginComponent } from "../login/login.component";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [SharedModule, RouterModule, LoginComponent]
})
export class HeaderComponent {
  constructor(
    public cartService: CartService,
    public dialog: Dialog,
    public loginService: LoginService
  ) {
    this.cartService.getProducts().subscribe();
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
