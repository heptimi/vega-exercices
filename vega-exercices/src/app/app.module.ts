import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VegaChartComponent } from './vega-chart/vega-chart.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FindTheCountryDialogComponent } from './find-the-country-dialog/find-the-country-dialog.component';
import {FormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatDialogModule, MatFormFieldModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    VegaChartComponent,
    FindTheCountryDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    VegaChartComponent,
    FindTheCountryDialogComponent
  ],
})
export class AppModule { }
