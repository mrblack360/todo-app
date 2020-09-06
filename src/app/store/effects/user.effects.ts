import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService, User } from '@iapps/ngx-dhis2-http-client';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  addCurrentUser,
  loadCurrentUser,
  loadCurrentUserFail
} from '../actions';

@Injectable()
export class UserEffects implements OnInitEffects {
  loadCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCurrentUser),
      switchMap(() =>
        this.httpClient.me().pipe(
          map((currentUser: User) => addCurrentUser({ currentUser })),
          catchError((error: any) => of(loadCurrentUserFail({ error })))
        )
      )
    )
  );

  ngrxOnInitEffects() {
    return loadCurrentUser();
  }

  constructor(
    private actions$: Actions,
    private httpClient: NgxDhis2HttpClientService
  ) {}
}
