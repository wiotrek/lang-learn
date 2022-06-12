import { Component } from '@angular/core';
import { LocalizationService } from 'src/app/core/internationalization/_services/localization.service';
import { ExercisesService } from 'src/app/exercises/_services/exercises.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    public localizationService: LocalizationService,
    private exercisesService: ExercisesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  // reset all results for current language
  // and start again from home component
  resetLangSession(): void {

    this.exercisesService
      .resetSessionResult(this.localizationService.localeId);

    this.router.navigate([''], {
      relativeTo: this.activatedRoute
    }).then();
  }
}
