import { Component } from '@angular/core';
import { ShuffleWordsArray } from "./_arrays/shuffle-words.array";
import { SummaryBtnType } from "../../shared/components/summary/_types/summary-btn.type";

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
  styleUrls: ['./ex02.component.scss']
})
export class Ex02Component {

  isChecking = false;

  result = 0;

  listOfShuffleWords = ShuffleWordsArray;

  summaryEvents(btn: SummaryBtnType): void {
    console.log(btn);
  }
}
