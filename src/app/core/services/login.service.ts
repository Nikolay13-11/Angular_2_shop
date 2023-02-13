import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = new BehaviorSubject<boolean>(false)
  isIsAdmin = new BehaviorSubject<boolean>(false)
  userName = new BehaviorSubject<string | null>(null)

  private inputIsLoggedIn = this.isLoggedIn.asObservable()
  private inputIsIsAdmin = this.isLoggedIn.asObservable()
  private inputUserName = this.isLoggedIn.asObservable()

  constructor() { }

  nextLogIn({isAdmin = false, userName}: {isAdmin: boolean, userName: string}) {
    this.isLoggedIn.next(true);
    this.isIsAdmin.next(isAdmin);
    this.userName.next(userName)
  }

  nextLogOut() {
    this.isLoggedIn.next(false);
    this.isIsAdmin.next(false);
    this.userName.next(null)
  }
}
