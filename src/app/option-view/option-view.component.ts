import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-option-view',
  templateUrl: './option-view.component.html',
  styleUrls: ['./option-view.component.css']
})
export class OptionViewComponent implements OnInit {
  @Input() includeNumbers = [];
  @Input() excludeNumbers = [];

  constructor() { }

  ngOnInit() {
  }

  removeIncludeNumber(number) {
    for (var i = 0; i < this.includeNumbers.length; i++) {
      if (this.includeNumbers[i] == number) {
        this.includeNumbers.splice(i, 1);
        return;
      }
    }
  }

  removeExcludeNumber(number) {
    for (var i = 0; i < this.excludeNumbers.length; i++) {
      if (this.excludeNumbers[i] == number) {
        this.excludeNumbers.splice(i, 1);
        return;
      }
    }
  }
}
