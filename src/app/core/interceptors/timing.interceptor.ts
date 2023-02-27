import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpEventType
} from '@angular/common/http';
import { Observable, filter, tap } from 'rxjs';

import { AppSettingsService } from "../services/app-settings.service";

import { Methods } from "../models/settings.model";


@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  requestStartTime!: number | null;
  constructor(private settingsService: AppSettingsService) {
  }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let activeLogMethods: Methods[] = [];
     this.settingsService.getLogMethods().subscribe(settings => activeLogMethods = settings);
    if(activeLogMethods.includes(request.method as Methods)) {
      this.requestStartTime = Date.now();
    }
    return next.handle(request).pipe(
      filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
      tap((event) => {
        if(this.requestStartTime) {
          console.log(`${request.method} - ${request.url.split('/').at(-1)} - ${Date.now() - this.requestStartTime} ms`)
        }
        this.requestStartTime = null;
      })
    );
  }
}
