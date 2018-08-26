import { Component, OnInit } from '@angular/core';
import { LotteryService } from '../../lottery.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  numbers = [];
  includeNum;
  excludeNum;
  error = '';

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
    var ret; 

    if (!isNaN(this.includeNum)) {
      ret = this.lotteryService.pushIncludeNumber(this.includeNum);

      if (ret.status) {
        this.error = '';
      } else {
        this.error = ret.msg;
      }
    }
  }

  onExcludeBtn() {
    var ret; 

    if (!isNaN(this.excludeNum)) {
      ret = this.lotteryService.pushExcludeNumber(this.excludeNum);

      if (ret.status) {
        this.error = '';
      } else {
        this.error = ret.msg;
      }  
    }
  }
}
