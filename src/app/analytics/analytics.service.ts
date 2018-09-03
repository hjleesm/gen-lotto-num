import { Injectable} from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: Http) { }

  getCount() {
    return this.http.get(API_URL + '/api/lotto/count');
  }

  getWeeklyCount() {
    return this.http.get(API_URL + '/api/lotto/count/weekly');
  }
}
