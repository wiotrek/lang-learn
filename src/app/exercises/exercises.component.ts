import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangAvaliable } from '../shared/consts/lang-avaliable.const';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent {

  chosenCountry: {
    name: string;
    display: string;
    flag: string;
  } | undefined;

  exNumber: string | undefined;
  langAvaliable = LangAvaliable;

  constructor(private activatedRoute: ActivatedRoute) {

    // get number of exercise from url
    this.exNumber = this.activatedRoute.firstChild?.snapshot.paramMap
      .get('ex-number') ?? "1";

    // get lang value from localstorage
    this.chosenCountry = this.langAvaliable.find(lang =>
      lang.name === localStorage.getItem('language'));
  }
}
