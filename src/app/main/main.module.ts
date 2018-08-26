import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BallComponent } from './ball/ball.component';
import { GeneratorComponent } from './generator/generator.component';
import { BottomComponent } from './bottom/bottom.component';
import { ResultComponent } from './result/result.component';
import { BallGroupComponent } from './ball-group/ball-group.component';
import { AdsenseComponent } from './adsense/adsense.component';
import { OptionComponent } from './option/option.component';
import { OptionViewComponent } from './option-view/option-view.component';
import { MainComponent } from './main/main.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatButtonModule, 
  MatSelectModule
 } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
  ],
  declarations: [
    BallComponent,
    GeneratorComponent,
    BottomComponent,
    ResultComponent,
    BallGroupComponent,
    AdsenseComponent,
    OptionComponent,
    OptionViewComponent,
    MainComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
