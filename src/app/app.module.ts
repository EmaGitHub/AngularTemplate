import { MatPaginatorI18nService } from './core/services/utils/mat-paginator-i18n.service';
import { BaseComponent } from './pages/base/base.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app.routing.module.';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CoreModule } from './core/core.module';
import { AppInitService } from './core/services/general-config/app-init.service';
import { AppHttpInterceptor } from './core/interceptors/app-http-interceptor';
import { SharedModule } from './shared/shared.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { LoginComponent } from './pages/account/login/login.component';
import { RegisterComponent } from './pages/account/register/register.component';
import { WelcomeComponent } from './pages/account/welcome/welcome.component';

// ngx-translate - required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    // *pages
    WelcomeComponent,
    LoginComponent,
    RegisterComponent  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    // *app routing
    AppRoutingModule,
    // *app commons
    CoreModule,
    SharedModule,
    // **UTENTI
    // *ngx-translate
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      // returning an Observable and converting it to Promise. IMPORTANT it must be a Promise 
      provide: APP_INITIALIZER,
      useFactory: (appInitService: AppInitService) => () => appInitService.loadConfiguration().toPromise(),
      multi: true,
      deps: [AppInitService]
    },
    // http interceptor
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
    { provide: MatPaginatorIntl, useClass: MatPaginatorI18nService },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
