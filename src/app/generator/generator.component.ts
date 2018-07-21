import { Component, OnInit } from '@angular/core';
import { LotteryService } from '../lottery.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  numbers = [];

  constructor(private lotteryService: LotteryService) { }

  ngOnInit() {
    this.lotteryService.mix();
  }

  onClick() {
    this.numbers = this.lotteryService.getNumber();
  }
}
