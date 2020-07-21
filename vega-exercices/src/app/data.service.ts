import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getChartJson(chartName: string): Observable<any> {
    return this.http.get('assets/chart/' + chartName.toLowerCase() + '.json');
  }

  getDataJson(dataName: string): Observable<any> {
    return this.http.get('assets/data/' + dataName.toLowerCase() + '.json');
  }
}
