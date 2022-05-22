import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren } from '@angular/core';
import { Ex03Service } from "./_serivce/ex03.service";
import { first, Subscription } from "rxjs";
import { Answers, WorkingTextModel } from "./_models/working-text.model";
import { SummaryBtnType } from "../../shared/components/summary/_types/summary-btn.type";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-ex03',
  templateUrl: './ex03.component.html',
  styleUrls: ['./ex03.component.scss']
})
export class Ex03Component implements OnInit, OnDestroy {

  // get all <select> selector from template
  @ViewChildren('selectRef') selectRef!: QueryList<ElementRef>;

  // header options
  isCheck = false;
  result = 0;
  amount = 0;

  // main array include text with {var} - keys
  mainTxtArray: string[] = [];

  // array include correct response and optional choice
  answers: Answers[] = [];

  // here push user choice from <select>
  workingAnswers: { id: number; val: string; }[] = [];

  private subscription: Subscription | undefined;

  constructor(
    private ex03Service: Ex03Service,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.ex03Service.getWorkingTextFromApi()
      .pipe(first())
      .subscribe((txtObj: WorkingTextModel) => {
        this.mainTxtArray = txtObj.working_text.split('{var}');
        this.answers = txtObj.answers;
        this.amount = txtObj.answers.length;

        this.clearWorkingAnswers(txtObj.answers.length);
      });
  }

  // when user select choice in <select>,
  // then assign value to working list
  fillUserChoice(txt: any, id: number): void {
    this.workingAnswers[id].val = txt.target.value;
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
        this.router.navigate(['ex-04'], {
            relativeTo: this.activatedRoute.parent
          }
        ).then();
        break;

      default:
        break;
    }
  }

  private check(): void {

    // if check is already then end of function
    if (this.isCheck) { return; }

    // set state isCheck
    this.isCheck = true;

    // check all correct response in workingAnswers list
    this.result = this.workingAnswers.reduce(
      (acc: number, curr: { id: number, val: string }) =>
        acc + (curr.val === this.answers[curr.id].correct ? 1 : 0), 0
    );
  }

  // assign empty value to working list
  private clearWorkingAnswers(amountToClear: number): void {
    let i = 0;

    while (i < amountToClear) {
      this.workingAnswers.push({ id: i, val: '' });
      i++;
    }
  }

  private reset(): void {

    // set state isCheck
    this.isCheck = false;

    // assign empty value for any select
    this.selectRef.forEach(el => el.nativeElement.value = '');

    // assign empty value for any element in working list
    this.clearWorkingAnswers(this.answers.length);
  }

  ngOnDestroy() { this.subscription?.unsubscribe(); }
}
