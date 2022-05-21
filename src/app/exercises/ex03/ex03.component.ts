import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ex03Service } from "./_serivce/ex03.service";
import { first, Subscription } from "rxjs";
import { Answers, WorkingTextModel } from "./_models/working-text.model";
import { SummaryBtnType } from "../../shared/components/summary/_types/summary-btn.type";

@Component({
  selector: 'app-ex03',
  templateUrl: './ex03.component.html',
  styleUrls: ['./ex03.component.scss']
})
export class Ex03Component implements OnInit, OnDestroy {

  // header options
  isCheck = false;
  result = 0;
  amount = 0;

  workingTxtArray: string[] = [];
  answers: Answers[] = [];

  userChoice: {
    id: number;
    val: string;
  }[] = [];

  private subscription: Subscription | undefined;

  constructor(private ex03Service: Ex03Service) {}

  ngOnInit() {
    this.ex03Service.getWorkingTextFromApi()
      .pipe(first())
      .subscribe((txtObj: WorkingTextModel) => {
        this.workingTxtArray = txtObj.working_text.split('{var}');
        this.answers = txtObj.answers;
        this.amount = txtObj.answers.length;

        let i = 0;
        while (i < this.answers.length) {
          this.userChoice.push({ id: i, val: '' });
          i++;
        }
      });
  }

  summaryEvents(btn: SummaryBtnType): void {
    switch (btn) {
      case "check":
        this.check();
        break;
      case "reset":
        this.reset();
        break;

      default:
        break;
    }
  }

  fillUserChoice(txt: any, id: number): void {
    this.userChoice[id].val = txt.target.value;
  }

  private check(): void {

    // if check is already then end of function
    if (this.isCheck) { return; }

    this.isCheck = true;

    this.result = this.userChoice.reduce(
      (acc: number, curr: { id: number, val: string }) => {

        return acc + (curr.val === this.answers[curr.id].correct ? 1 : 0)
      }, 0
    );
  }

  private reset(): void {
    this.isCheck = false;
  }

  ngOnDestroy() { this.subscription?.unsubscribe(); }
}
