import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BallComponent } from './ball/ball.component';
import { GeneratorComponent } from './generator/generator.component';
import { BottomComponent } from './bottom/bottom.component';
import { ResultComponent } from './result/result.component';
import { BallGroupComponent } from './ball-group/ball-group.component';
import { AdsenseComponent } from './adsense/adsense.component';

@NgModule({
  declarations: [
    AppComponent,
    BallComponent,
    GeneratorComponent,
    BottomComponent,
    ResultComponent,
    BallGroupComponent,
    AdsenseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
