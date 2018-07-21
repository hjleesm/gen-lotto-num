import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})

export class BallComponent implements OnInit {
  @Input() number;
  color;

  constructor() { }

  ngOnInit() {
    if(this.number <= 10) {
      this.color = '#f9b704';
    } else if(this.number <= 20) {
      this.color = '#08baf5';
    } else if(this.number <= 30) {
      this.color = '#f0555c';
    } else if(this.number <= 40) {
      this.color = '#a09fa0';
    } else {
      this.color = '#9cd234';
    }
  }

}
