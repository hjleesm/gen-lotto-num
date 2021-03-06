import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  count = 0;
  chart = [];
  mChart = [];

  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit() {
    this.analyticsService.getCount().subscribe(data => {
      this.count = data.json();
    });

    this.analyticsService.getWeeklyCount().subscribe(data => {
      var countData = data.json(),
          label = [],
          mLabel = [];

      countData.date = countData.date.reverse();
      countData.monthStr = countData.monthStr.reverse();
      for(var i = 0; i < countData.date.length; i++) {
        var dt = new Date(countData.date[i]);
        label.push(dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate());
        mLabel.push(countData.monthStr[i]);
      }
      label.push('이번 주');
      mLabel.push('이번 달');

      this.chart = new Chart('canvas', 
      {
        type: 'bar',
        data: {
          labels: label,
          datasets: [{
            label: '번호 셋 개수',
            data: countData.counts.reverse(),
            borderWidth: 1
          }]
        },
        options: {
          title: {
            display: true,
            text: '주별 생성된 번호 셋 개수'
          }
        }
      });

      this.mChart = new Chart('mCanvas', 
      {
        type: 'bar',
        data: {
          labels: mLabel,
          datasets: [{
            label: '번호 셋 개수',
            data: countData.monthCounts.reverse(),
            borderWidth: 1
          }]
        },
        options: {
          title: {
            display: true,
            text: '월별 생성된 번호 셋 개수'
          }
        }
      });
    });
  }

}
