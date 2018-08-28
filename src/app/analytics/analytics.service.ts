import { Injectable, EventEmitter} from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  onCount: EventEmitter<any> = new EventEmitter();

  constructor(private http: Http) { }

  getCount() {
    return this.http.get(API_URL + '/api/lotto/count');
  }
}
