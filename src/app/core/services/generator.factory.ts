import { InjectionToken } from "@angular/core";

import {GeneratorService} from "./generator.service";

export const generatedString = new InjectionToken<string>('generatedString');

export function generatorFactory(n: number): (generateString: GeneratorService) => string {
  return (generateString: GeneratorService): string => generateString.generate(n);
}
