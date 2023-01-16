import {Injectable, InjectionToken} from '@angular/core';

@Injectable()
export class LocalStorageService {
  myLocalStorage = window.localStorage;

  setValue(key: string, value: string): void {
    this.myLocalStorage.setItem(key, value);
  };

  getValue(key: string): string | null {
    return this.myLocalStorage.getItem(key);
  };

  removeValue(key: string): void {
    return this.myLocalStorage.removeItem(key);
  };

  clear(): void {
    this.myLocalStorage.clear();
  };
}

export const localStorageInstance = new LocalStorageService();

export const myLocalStorage = new InjectionToken<LocalStorageService>('localStorage');
