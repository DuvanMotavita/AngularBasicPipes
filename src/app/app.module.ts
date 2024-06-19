import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

//App Locale language configuration
import localeSpCo from "@angular/common/locales/es-CO";
import localefrCa from "@angular/common/locales/fr-CA";

import {  registerLocaleData } from "@angular/common";

registerLocaleData(localeSpCo);
registerLocaleData(localefrCa);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-CO'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
