import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as vg from 'vega';
import {DataService} from '../data.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material';
import {FindTheCountryDialogComponent} from '../find-the-country-dialog/find-the-country-dialog.component';


@Component({
  selector: 'app-vega-chart',
  templateUrl: './vega-chart.component.html',
  styleUrls: ['./vega-chart.component.css']
})
export class VegaChartComponent implements OnInit {


  vegaView: vg.View;
  dataCountry;
  country: string;

  @Input() id: any;
  @Output() outgoingData = new EventEmitter<any>();
  @Input() pathToData: string;


  constructor(private dataService: DataService, private dialog: MatDialog) {
  }

  ngOnInit() {

    this.dataService.getDataJson('world-country').subscribe(
      json => {
        this.dataCountry = json;
      });
    this.getView().subscribe(
      view => {
        this.vegaView = view;
        this.vegaView.addEventListener('click', (event, item) => {
          // this.changeColor(item.datum.id);
          console.log(this.getTheCountry(item.datum.id));
          this.openDialog(item.datum.id);
        });
      }
    );
    this.vegaView
      .run();
  }

  getTheCountry(id: number): string {
    const objIndex = this.dataCountry.findIndex((obj => obj.id == id));
    return this.dataCountry[objIndex].name;
  }

  changeColor(id: number) {
    const objIndex = this.dataCountry.findIndex((obj => obj.id == id));
    this.dataCountry[objIndex].isSuccess = true;
    this.vegaView.remove('countries', () => true)
      .run()
      .insert('countries', this.dataCountry)
      .run();
  }

  getView(): Observable<vg.View> {
    return this.dataService.getChartJson('world-map').pipe(
      map(graphJson =>
        new vg.View(vg.parse(graphJson))
          .renderer('svg')
          .initialize('#' + this.id)
          .hover()
      )
    );
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(FindTheCountryDialogComponent, {
      width: '250px',
      data : {data: this.getTheCountry(id)}
    });
  }

}
