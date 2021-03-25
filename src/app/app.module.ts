import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { MaterialModule } from './material.module';
import { LoginComponent } from './user/login/login.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TokenInterceptor } from "./core/interceptor";
import { Valido } from './core/valido';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './core/auth-guard-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    routing,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

    // ngx-translate and the loader module
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,

    ReactiveFormsModule,
  ],
  providers: [
    Valido,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }


//required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

//  ng build --prod --base-href /domain_name/ 
// or Use this for refresh client after deploy
//  ng build --prod --outputHashing=all --base-href /domain_name/
