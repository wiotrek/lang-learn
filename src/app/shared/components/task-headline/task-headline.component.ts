import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-headline',
  template: `
    <div class="headline">
      <h2 class="headline__left">{{headline}}</h2>
      <div class="headline__right" *ngIf="isChecking">
        {{score + '/' + amount}}
      </div>
    </div>
  `,
  styles: [`
    .headline {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }

    .headline__left {
      font-size: 1.2rem;
      margin: 0;
    }

    .headline__right {
      font-size: 1rem;
      background-color: green;
      color: white;
      padding: 5px 10px;
      border-radius: 5px;
    }
  `]
})
export class TaskHeadlineComponent {

  // topic of exercise
  @Input() headline = '';

  // when is checking show exercise result
  @Input() score = 0;

  // length of tasks
  @Input() amount = 0;

  // hidden next page btn if isChecking
  @Input() isChecking = false;
}
