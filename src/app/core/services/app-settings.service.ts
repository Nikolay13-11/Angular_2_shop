import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { AppSettingHttpService } from "./app-setting-http.service";
import { LocalStorageService } from "./local-storage.service";
import { logSettingStorageName, sortSettingStorageName } from "../helpers/constants";

import { ISettings, Methods } from "../models/settings.model";


@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor(private localStorageService: LocalStorageService, private appSettingHttpService: AppSettingHttpService) {}

  getLogMethods(): Observable<Methods[]> {
    return of(JSON.parse(this.localStorageService.getValue(logSettingStorageName) || '[]'));
  }

  setLogMethods(logMethods: Methods[]) {
    this.localStorageService.setValue(logSettingStorageName, JSON.stringify(logMethods));
  }

  getSortSettings(): Observable<ISettings['sort']['defaultLogValues']> {
    return of(JSON.parse(this.localStorageService.getValue(sortSettingStorageName) || '[]'));
  }

  initSettings() {
    const currentLogSettings = this.localStorageService.getValue(logSettingStorageName);
    const currentSortSettings = this.localStorageService.getValue(sortSettingStorageName);

    if(!currentSortSettings || !currentLogSettings) {
      this.appSettingHttpService.getSettings().subscribe(({log, sort}) => {
        if(!currentLogSettings) {
          this.localStorageService.setValue(logSettingStorageName, JSON.stringify(log.defaultLogValues));
        }
        if(!currentSortSettings) {
          this.localStorageService.setValue(sortSettingStorageName, JSON.stringify(sort.defaultLogValues));
        }
      });
    }
  }
}
