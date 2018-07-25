import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatButtonModule, 
  MatSelectModule
 } from '@angular/material';

import { AppComponent } from './app.component';
import { BallComponent } from './ball/ball.component';
import { GeneratorComponent } from './generator/generator.component';
import { BottomComponent } from './bottom/bottom.component';
import { ResultComponent } from './result/result.component';
import { BallGroupComponent } from './ball-group/ball-group.component';
import { AdsenseComponent } from './adsense/adsense.component';
import { OptionComponent } from './option/option.component';



import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    BallComponent,
    GeneratorComponent,
    BottomComponent,
    ResultComponent,
    BallGroupComponent,
    AdsenseComponent,
    OptionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
