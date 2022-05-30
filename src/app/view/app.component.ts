import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .wrapper__mid {
      box-sizing: border-box;
      max-width: 1100px;
      margin: auto;
      padding: 20px 50px;
    }
  `]
})
export class AppComponent {
  title = 'Lang Learn App';
}
