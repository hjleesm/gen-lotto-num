import { Component, OnInit } from '@angular/core';
import { LotteryService } from '../../lottery.service';
import { DataService } from '../../data.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  numbers = [];
  isOpenOption = false;
  includeNumbers = [];
  excludeNumbers = [];

  constructor(
    private lotteryService: LotteryService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.lotteryService.mix();

    this.lotteryService.addedIncludeNumbers.subscribe(data => {
      this.includeNumbers = data;
    })

    this.lotteryService.addedExcludeNumbers.subscribe(data => {
      this.excludeNumbers = data;
    })
  }

  onClick() {
    this.numbers = this.lotteryService.getNumber();
    this.dataService.push(this.numbers);
  }

  onOption() {
    this.isOpenOption = !this.isOpenOption;
  }
}
