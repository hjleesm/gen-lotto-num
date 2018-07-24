import { Component, OnInit } from '@angular/core';
import { LotteryService } from '../lottery.service';
import { DataService } from '../data.service';
import { THIS_EXPR } from '../../../node_modules/@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  numbers = [];
  isOpenOption = false;

  constructor(
    private lotteryService: LotteryService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.lotteryService.mix();
  }

  onClick() {
    this.numbers = this.lotteryService.getNumber();
    this.dataService.push(this.numbers);
  }

  onOption() {
    this.isOpenOption = !this.isOpenOption;
  }
}
