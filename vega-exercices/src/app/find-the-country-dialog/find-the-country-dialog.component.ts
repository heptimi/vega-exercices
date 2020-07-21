import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../app.component';


@Component({
  selector: 'app-find-the-country-dialog',
  templateUrl: './find-the-country-dialog.component.html',
  styleUrls: ['./find-the-country-dialog.component.css']
})
export class FindTheCountryDialogComponent implements OnInit {

  @Input() country;

  countryToGuess: string;

  ngOnInit() {
  }
  constructor(public dialogRef: MatDialogRef<FindTheCountryDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData){

  }

  onNoClick(): void {
    this.dialogRef.close();
  }



}
