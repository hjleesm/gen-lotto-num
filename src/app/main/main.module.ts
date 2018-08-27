import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BallComponent } from './ball/ball.component';
import { GeneratorComponent } from './generator/generator.component';
import { ResultComponent } from './result/result.component';
import { BallGroupComponent } from './ball-group/ball-group.component';
import { OptionComponent } from './option/option.component';
import { OptionViewComponent } from './option-view/option-view.component';
import { MainComponent } from './main/main.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatButtonModule, 
  MatSelectModule
 } from '@angular/material';

 const routes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
  ],
  declarations: [
    BallComponent,
    GeneratorComponent,
    ResultComponent,
    BallGroupComponent,
    OptionComponent,
    OptionViewComponent,
    MainComponent
  ],
  exports: [
    MainComponent,
    RouterModule
  ]
})
export class MainModule { }
