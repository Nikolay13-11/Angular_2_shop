import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, retry } from "rxjs";

import { ISettings } from "../models/settings.model";
import { defaultSettings, settingsUrl } from "../helpers/constants";

@Injectable({
  providedIn: 'root'
})
export class AppSettingHttpService {

  constructor(private http: HttpClient) {}

  getSettings(): Observable<ISettings> {
    return this.http.get<ISettings>(settingsUrl).pipe(
      retry(2),
      catchError(err => {
        console.log(err)
        return of(defaultSettings);
      })
    )
  }
}
