import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeRangeInputComponent } from './time-range-input/time-range-input.component';
import { PackageInputComponent } from './package-input/package-input.component';
import { PackageListComponent } from './package-list/package-list.component';
import{NpmPackageService}from '../app/shared/services/npm-package.service'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    TimeRangeInputComponent,
    PackageInputComponent,
    PackageListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NpmPackageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
