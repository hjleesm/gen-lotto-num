import { MainModule } from './main/main.module';
import { AnalyticsModule } from './analytics/analytics.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdsenseComponent } from './adsense/adsense.component';
import { BottomComponent } from './bottom/bottom.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    AdsenseComponent,
    BottomComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MainModule,
    AnalyticsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
