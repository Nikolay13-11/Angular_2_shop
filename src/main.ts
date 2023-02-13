import { bootstrapApplication } from "@angular/platform-browser";
import {DEFAULT_CURRENCY_CODE, importProvidersFrom} from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";

import { AppComponent} from "./app/app.component";
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "./app.routing";
import {ProductsModule} from "./app/products/products.module";



bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'CAD'
    },
    importProvidersFrom(ProductsModule),
    importProvidersFrom(RouterModule.forRoot(APP_ROUTES)),
  ],
})
