import { Injectable, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  ballGroups = [];

  onChanged: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public push(ballGroup) {
    this.ballGroups.push(ballGroup);
    this.onChanged.emit(this.ballGroups);
  }
}
