import { Injectable } from '@angular/core';

import { characters } from "../helpers/constants";
import { genID } from "./gen-id.generator";

@Injectable()
export class GeneratorService {
  generator = genID();

  constructor() { }

  generate(n: number): string {

    let result = '';

    for (let i = 0; i < n; i++) {
      const index = Math.floor(Math.random() * characters.length - 1);

      result += characters[index];
    }

    return result;
  };

  getNewID(): number {
    return this.generator();
  };
}
