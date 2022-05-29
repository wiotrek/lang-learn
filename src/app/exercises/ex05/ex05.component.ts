import { Component } from '@angular/core';
import { SummaryBtnType } from 'src/app/shared/components/summary/_types/summary-btn.type';
import { ColorListArray } from 'src/app/exercises/ex05/_arrays/color-list.array';
import { ActivatedRoute, Router } from '@angular/router';
import { ColorListModel } from 'src/app/exercises/ex05/_models/color-list.model';

@Component({
  selector: 'app-ex05',
  templateUrl: './ex05.component.html',
  styleUrls: ['./ex05.component.scss']
})
export class Ex05Component {

  /** === exercise default options */
  isCheck = false;
  result = 0;
  amount = ColorListArray.length;

  list: ColorListModel[] = ColorListArray;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

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

  private check(): void {

    if (this.isCheck) { return; }

    this.isCheck = true;

    // check all correct response in workingAnswers list
    this.result = this.list.reduce(
      (acc: number, curr: ColorListModel) =>
        acc + (
          curr.name.toLocaleLowerCase() === curr.value.toLocaleLowerCase()
            ? 1 : 0
        ), 0
    );
  }

  // set off check state and reset user value
  private reset(): void {

    // reset user values
    this.list.map(c => {
      c.value = '';
      return c;
    });

    // set off isCheck
    this.isCheck = false;
  }
}
