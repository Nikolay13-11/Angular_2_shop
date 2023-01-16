import { Injectable } from '@angular/core';

import { ConfigModel } from "../models/config.nodel";

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config: ConfigModel = new ConfigModel();

  setConfig(config: Partial<ConfigModel>) {
    this.config = {...this.config, ...config}
  };

  getConfig(): ConfigModel {
    return this.config
  };

  setConfigProperty(key: keyof ConfigModel, value: any) {
    this.config[key] = value;
  };

}
