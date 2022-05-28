import { Component } from '@angular/core';
import { SummaryBtnType } from 'src/app/shared/components/summary/_types/summary-btn.type';
import { ColorListArray } from 'src/app/exercises/ex05/_arrays/color-list.array';

@Component({
  selector: 'app-ex05',
  templateUrl: './ex05.component.html',
  styleUrls: ['./ex05.component.scss']
})
export class Ex05Component {

  /** === exercise default options */
  isCheck = false;
  result = 0;
  amount = 0;

  list = ColorListArray;

// catch events from bottom summary section
  summaryEvents(btn: SummaryBtnType): void {
    switch (btn) {
      case "check":
        break;
      case "reset":
        break;
      case "next":
        break;

      default:
        break;
    }
  }
}
