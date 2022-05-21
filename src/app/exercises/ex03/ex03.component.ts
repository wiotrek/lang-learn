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

  workingTxtArray: string[] = [];
  answers: Answers[] = [];

  private subscription: Subscription | undefined;

  constructor(private ex03Service: Ex03Service) {}

  ngOnInit() {
    this.ex03Service.getWorkingTextFromApi()
      .pipe(first())
      .subscribe((txtObj: WorkingTextModel) => {
        this.workingTxtArray = txtObj.working_text.split('{var}');
        this.answers = txtObj.answers;
      });
  }

  summaryEvents(btn: SummaryBtnType): void {
    return;
  }

  ngOnDestroy() { this.subscription?.unsubscribe(); }
}
