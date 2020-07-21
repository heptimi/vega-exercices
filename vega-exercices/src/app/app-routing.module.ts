import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class AppRoutingModule { }
