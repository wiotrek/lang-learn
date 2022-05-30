import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SummaryBtnType } from 'src/app/shared/components/summary/_types/summary-btn.type';

@Component({
  selector: 'app-universal-exercise',
  template: `
    <div class="wrapper">

      <app-task-headline
        [headline]="headline"
        [isChecking]="isChecking"
        [amount]="amount"
        [score]="score"
      ></app-task-headline>

      <div class="wrapper__main"><ng-content></ng-content></div>

      <app-summary
        [isChecking]="isChecking"
        (summaryEvents)="summaryEvents.emit($event)"
      ></app-summary>

    </div>
  `,
  styles: [` .wrapper__main { margin: 25px 0; } `]
})
export class UniversalExerciseComponent {

  // topic of exercise
  @Input() headline = '';

  // when is checking show exercise result
  @Input() score = 0;

  // length of tasks
  @Input() amount = 0;

  // hidden next page btn if isChecking
  @Input() isChecking = false;

  // when emit some button - check, reset or next
  @Output() summaryEvents = new EventEmitter<SummaryBtnType>();
}
