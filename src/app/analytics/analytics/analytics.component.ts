import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  count = 0;

  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit() {
    this.analyticsService.getCount().subscribe(data => {
      this.count = data.json();
    });
  }

}
