import {Component, OnInit} from '@angular/core';
import barvg from './barvg.json';

export interface DialogData {
  country: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vega-exercices';
  charts = [{name: 'barvg', path: '..assets/chart/barvg.json'}];

  ngOnInit() {
  }
}
