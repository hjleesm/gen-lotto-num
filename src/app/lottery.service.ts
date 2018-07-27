import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LotteryService {
  addedIncludeNumbers: EventEmitter<any> = new EventEmitter();
  addedExcludeNumbers: EventEmitter<any> = new EventEmitter();
  
  balls = [];
          
  includeNumbers = [];
  excludeNumbers = [];

  constructor() {
    this.init();
  }

  public init() {
    this.balls = [];

    for (var i = 1; i <= 45; i++)
      this.balls.push(i);
  }

  mix() {
    this.init();

    for (let i = 0; i < this.balls.length; i++) {
      const num1 = Math.floor(Math.random() * 45);
      const num2 = Math.floor(Math.random() * 45);

      const tmp = this.balls[num1];
      this.balls[num1] = this.balls[num2];
      this.balls[num2] = tmp;
    }
  }

  processIncludeNumbers(array) {
    if (this.includeNumbers.length == 0)
      return;

    for (var i = 0; i < this.includeNumbers.length; i++) {
      for(var j = 0; j < this.balls.length; j++) {
        if (this.includeNumbers[i] == this.balls[j]) {
          array.push(this.balls[j]);
          this.balls.splice(j, 1);
          break;
        }
      }
    }
  }

  processExcludeNumbers(array) {
    if (this.excludeNumbers.length == 0)
      return;

    for (var i = 0; i < this.excludeNumbers.length; i++) {
      for(var j = 0; j < this.balls.length; j++) {
        if (this.excludeNumbers[i] == this.balls[j]) {
          this.balls.splice(j, 1);
          break;
        }
      }
    }
  }

  getNumber() {
    const ret = [];

    this.processIncludeNumbers(ret);
    this.processExcludeNumbers(ret);

    for (let i = ret.length; i < 6; i++) {
      const num = Math.floor(Math.random() * this.balls.length);
      ret.push(this.balls[num]);
      this.balls.splice(num, 1);
    }

    this.mix();
    return ret.sort(function(a, b) {
      return a - b;
    });
  }

  pushIncludeNumber(number) {
    if (5 < this.includeNumbers.length) {
      return {
        status: false,
        msg: '최대 6개의 번호만 추가할 수 있습니다.'
      }
    }
    
    if (this.includeNumbers.includes(number)) {
      return {
        status: false,
        msg: '이미 포함된 번호입니다.'
      }
    }

    if (this.excludeNumbers.includes(number)) {
      return {
        status: false,
        msg: '제외할 번호에 추가된 번호입니다.'
      }
    }

    this.includeNumbers.push(number);
    this.includeNumbers.sort(function(a, b) {
      return a - b;
    });
    this.addedIncludeNumbers.emit(this.includeNumbers);

    return {
      status: true
    };
  }

  pushExcludeNumber(number) {
    if (5 < this.excludeNumbers.length) {
      return {
        status: false,
        msg: '최대 6개의 번호만 추가할 수 있습니다.'
      }
    }
    
    if (this.excludeNumbers.includes(number)) {
      return {
        status: false,
        msg: '이미 포함된 번호입니다.'
      }
    }

    if (this.includeNumbers.includes(number)) {
      return {
        status: false,
        msg: '포함할 번호에 추가된 번호입니다.'
      }
    }

    this.excludeNumbers.push(number);
    this.excludeNumbers.sort(function(a, b) {
      return a - b;
    });
    this.addedExcludeNumbers.emit(this.excludeNumbers);
    
    return {
      status: true
    };
  }
}
