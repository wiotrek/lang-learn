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
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }

    .headline__left {
      font-size: 1.2rem;
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
  @Input() headline = '';
  @Input() score = 0;
  @Input() amount = 0;
  @Input() isChecking = false;
}
