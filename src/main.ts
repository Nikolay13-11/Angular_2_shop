import { bootstrapApplication } from "@angular/platform-browser";
import { DEFAULT_CURRENCY_CODE, importProvidersFrom } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent} from "./app/app.component";
import { APP_ROUTES } from "./app.routing";
import { ProductsModule } from "./app/products/products.module";
import { httpInterceptorProviders } from "./app/core/interceptors";
import { AppStoreModule } from "./app/core/@ngrx/app-store.module";



bootstrapApplication(AppComponent, {
  providers: [
    httpInterceptorProviders,
    provideAnimations(),
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'CAD'
    },
    importProvidersFrom([ProductsModule, HttpClientModule, AppStoreModule, RouterModule.forRoot(APP_ROUTES)]),
  ],
})
