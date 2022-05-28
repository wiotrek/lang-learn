import { Component } from '@angular/core';
import { SummaryBtnType } from 'src/app/shared/components/summary/_types/summary-btn.type';
import { DigitListArray } from 'src/app/exercises/ex04/_arrays/digit-list.array';
import { ShuffleList } from 'src/app/shared/utils/shuffle-list.helper';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ex04',
  templateUrl: './ex04.component.html',
  styleUrls: ['./ex04.component.scss']
})
export class Ex04Component {

  /** === exercise default options */

  isCheck = false;
  result = 0;
  amount = DigitListArray.length;


  /** === exercise fields === */

  // main list for working
  workingDigitList: {
    seq: number;
    name: string
  }[] = ShuffleList(DigitListArray);

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  // change order in list
  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.workingDigitList, event.previousIndex, event.currentIndex);
  }

  // catch events from bottom summary section
  summaryEvents(btn: SummaryBtnType): void {
    switch (btn) {
      case "check":
        this.check();
        break;
      case "reset":
        this.reset();
        break;
      case "next":
        this.router.navigate(
          ['ex-05'],
          { relativeTo: this.activatedRoute.parent }
        ).then();
        break;

      default:
        break;
    }
  }

  // check result and set score
  private check(): void {

    // if check is already then end of function
    if (this.isCheck) { return; }

    // set state isCheck
    this.isCheck = true;

    // check all correct response in workingAnswers list
    this.result = this.workingDigitList.reduce(
      (acc: number, curr: { seq: number, name: string }, ind: number) =>
        acc + (curr.seq === ind + 1 ? 1 : 0), 0
    );
  }

  // set off check state and shuffle list
  private reset(): void {

    // shuffle list
    this.workingDigitList = ShuffleList(DigitListArray);

    // set off isCheck
    this.isCheck = false;
  }
}
