import { Component } from '@angular/core';

@Component({
  selector: 'app-ex00',
  template: `
    <div class="main">

      <h2>Do zrobienia masz {{amount}} zadań</h2>

      <button
        mat-raised-button
        class="main__start-btn"
        color="primary"
        routerLink="ex-01"
      >
        Rozpocznij
      </button>

    </div>
  `,
  styles: [`
    .main { text-align: center; }
  `]
})
export class Ex00Component {
  amount = 5;
}
