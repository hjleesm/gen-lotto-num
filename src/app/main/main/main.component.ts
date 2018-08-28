import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAnalytics() {
    this.dataService.clear();
    this.router.navigate(['analytics']);
  }
}
