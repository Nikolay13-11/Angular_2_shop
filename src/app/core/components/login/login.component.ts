import {Component, Inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import {SharedModule} from "../../../shared/shared.module";
import {LoginService} from "../../services/login.service";
import {Observable} from "rxjs";

class DialogData {
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isAdmin: boolean = false;
  userName!: string;

  isLoggedIn$?: Observable<boolean>;
  constructor(
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public data: DialogData,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.isLoggedIn$ = this.loginService.isLoggedIn;
  }

  onLogin() {
    this.loginService.nextLogIn({
      isAdmin: this.isAdmin,
      userName: this.userName
    })
    this.dialogRef.close();
  }

  onLogOut() {
    this.loginService.nextLogOut();
    this.dialogRef.close();
  }
}
