import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent } from './dashboard/dashboard.component';

import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    BrowserModule,
  ],
  exports: [
      DashboardComponent,
  ]
})
export class DashboardModule { }
