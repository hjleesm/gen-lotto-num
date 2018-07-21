import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  ballGroups = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.onChanged.subscribe(ballGroups => {
      this.ballGroups = ballGroups;
    });
  }

}
