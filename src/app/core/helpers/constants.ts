import { SortOptions } from "../models/constant.model";
import {ISettings, Methods} from "../models/settings.model";

export const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const sortOptions: SortOptions = {
  cost: 'cost',
  count: 'count',
  name: 'title'
}

export const defaultSettings: ISettings = {
  log: {
    defaultLogValues: [Methods.Get]
  },
  sort: {
    defaultLogValues: {
      order: "count",
      direction: false
    }
  }
};


const API_URL = "http://localhost:3000";
export const productsUrl = `${API_URL}/products`;
export const cartUrl = `${API_URL}/cart`;

export const settingsUrl = 'assets/app-settings.json'

export const cartLocalStorageName = 'cart';
export const logSettingStorageName = 'logSetting';
export const sortSettingStorageName = 'sortSetting';
