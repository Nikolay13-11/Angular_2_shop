import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
  App: string = 'DiveShop';
  Ver: string = '1.0';
  API_URL: string = 'https://my_dive_shop_api';
}

export const constants = new ConstantsService();
