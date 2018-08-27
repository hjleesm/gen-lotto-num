import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AnalyticsComponent } from './analytics/analytics.component';

const routes: Routes = [{ path: 'analytics', component: AnalyticsComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [AnalyticsComponent],
  exports: [
    RouterModule
  ]
})
export class AnalyticsModule { }
