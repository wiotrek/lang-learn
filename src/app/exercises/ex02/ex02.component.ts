import { Component } from '@angular/core';
import { ShuffleWordsArray } from "./_arrays/shuffle-words.array";
import { SummaryBtnType } from "../../shared/components/summary/_types/summary-btn.type";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

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

  drop(event: CdkDragDrop<string[]>, id: number): void {
    moveItemInArray(
      this.listOfShuffleWords[
        this.listOfShuffleWords.findIndex(x => x.id === id)
      ].words,
      event.previousIndex,
      event.currentIndex
    );
  }
}
