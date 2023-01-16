import { Component, Inject, InjectionToken, Optional } from '@angular/core';

import { ConfigOptionsService } from "../../core/services/config-options.service";
import { constants, ConstantsService } from "../../core/services/constants.service";
import { generatedString, generatorFactory } from "../../core/services/generator.factory";
import { GeneratorService } from "../../core/services/generator.service";
import { localStorageInstance, LocalStorageService, myLocalStorage } from "../../core/services/local-storage.service";


const CONSTANTS = new InjectionToken<ConstantsService>('constants');

@Component({
  selector: 'app-first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  standalone: true,
  providers: [
    GeneratorService,
    {provide: CONSTANTS, useValue: constants},
    {provide: myLocalStorage, useValue: localStorageInstance},
    {provide: generatedString, useFactory: generatorFactory(10), deps: [GeneratorService]}
  ]
})
export class FirstComponent {
  title: string = 'First Component Title';

  constructor(
    @Optional() private configOptionService: ConfigOptionsService,
    @Optional() @Inject(CONSTANTS) private constants: ConstantsService,
    @Optional() @Inject(myLocalStorage) private myLocalStorage: LocalStorageService,
    @Optional() @Inject(generatedString) private generatedString: string,
    @Optional() private generatorService: GeneratorService,
  ) {}
}
