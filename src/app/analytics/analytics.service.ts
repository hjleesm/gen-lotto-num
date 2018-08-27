import { Injectable, EventEmitter} from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: Http) { }

  getCount() {
    this.http.get('localhost:8088/api/lotto/count').subscribe((data) => {
      console.log(data);
    });
  }
}
