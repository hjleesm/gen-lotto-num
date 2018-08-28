import { Injectable, EventEmitter} from '@angular/core';
import { environment } from '../environments/environment';
import { Http } from '@angular/http';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  ballGroups = [];

  onChanged: EventEmitter<any> = new EventEmitter();
  onClear: EventEmitter<any> = new EventEmitter();

  constructor(private http: Http) { }

  push(ballGroup) {
    this.ballGroups.push(ballGroup);
    this.onChanged.emit(this.ballGroups);
    
    this.http.post(API_URL + '/api/lotto/push', {
      numbers: ballGroup.join(' ')
    }).subscribe();
  }

  clear() {
    this.ballGroups.length = 0;
    this.onChanged.emit([]);
    this.onClear.emit();
  }
}
