import { bootstrapApplication } from "@angular/platform-browser";
import { DEFAULT_CURRENCY_CODE } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";

import { AppComponent} from "./app/app.component";



bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'CAD'
    }
  ]
})
