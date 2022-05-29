import { Component } from '@angular/core';

@Component({
  selector: 'app-ex00',
  template: `
    <div class="wrapper">

      <h2>Do zrobienia masz {{amount}} zadań</h2>

      <button
        mat-raised-button
        class="wrapper__start-btn"
        color="primary"
        routerLink="ex-01"
      >
        Rozpocznij
      </button>

    </div>
  `,
  styles: [`
    .wrapper {
      text-align: center;
    }
  `]
})
export class Ex00Component {
  amount = 5;
}
