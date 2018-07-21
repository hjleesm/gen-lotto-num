import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LotteryService {
  balls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45
          ];

  constructor() { }

  public init() {
    this.balls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45
    ];
  }

  public mix() {
    this.init();

    for(var i = 0; i < this.balls.length; i++) {
      var num1 = Math.floor(Math.random() * 45);
      var num2 = Math.floor(Math.random() * 45);

      var tmp = this.balls[num1];
      this.balls[num1] = this.balls[num2];
      this.balls[num2] = tmp;
    }
  }

  public getNumber() {
    var ret = [];

    for(var i = 0; i < 6; i++) {
      var num = Math.floor(Math.random() * this.balls.length);
      ret.push(this.balls[num]);
      this.balls.splice(num, 1);
    }
    
    this.mix();
    return ret.sort(function(a, b) {
      return a - b;
    });
  }
}