import { Component, OnInit } from '@angular/core';
import { LotteryService } from '../lottery.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  numbers = [];
  includeNum;
  excludeNum;

  constructor(private lotteryService: LotteryService) { }

  ngOnInit() {
    for (var i = 1; i <= 45; i++)
      this.numbers.push(i);
  }

  updateIncludeNum(number: string) {
    this.includeNum = number;
  }

  updateExcludeNum(number: string) {
    this.excludeNum = number;
  }

  onIncludeBtn() {
    if (!isNaN(this.includeNum))
      this.lotteryService.pushIncludeNumber(this.includeNum);
  }

  onExcludeBtn() {
    if (!isNaN(this.excludeNum))
      this.lotteryService.pushExcludeNumber(this.excludeNum);
  }
}
