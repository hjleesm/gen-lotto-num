import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ball-group',
  templateUrl: './ball-group.component.html',
  styleUrls: ['./ball-group.component.css']
})
export class BallGroupComponent implements OnInit {
  @Input() ballGroup;

  constructor() { }

  ngOnInit() {
  }

}
