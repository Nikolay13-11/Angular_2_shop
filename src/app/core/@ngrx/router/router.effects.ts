import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as RouterActions from './router.actions';


const effectConfig = {
  dispatch: false
};

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}

  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.go),
        tap(action => {
          const { type: deleted, path, queryParams, extras } = { ...action };
          this.router.navigate(path, { queryParams, ...extras });
        })
      ),
    effectConfig
  );

  navigateHome$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.goHome),
        tap(action => {
          this.router.navigate(['']);
        })
      ),
    effectConfig
  );

  navigateBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.back),
        tap(() => this.location.back())
      ),
    effectConfig
  );

  navigateForward$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.forward),
        tap(() => {
          this.location.forward()
        })
      ),
    effectConfig
  );
}
