import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';
import { LangAvailableArray } from '../shared/arrays/lang-available.array';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnDestroy {

  // currently selected country
  chosenCountry: {
    name: string;
    display: string;
    flag: string;
  } | undefined;

  // current exercise number
  exNumber: string | undefined;

  // exclude list of languages
  langAvailable = LangAvailableArray;

  // subscription for observables
  private subscription: Subscription | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

    // listen url, and check current exercise
    this.subscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route: ActivatedRoute) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        })
      )
      .subscribe(
        (route: ActivatedRoute) => this.exNumber = route.snapshot.url[0]
          ? route.snapshot.url[0].path.slice(3, 5)
          : '00'
      );

    // get lang value from localstorage
    this.chosenCountry = this.langAvailable.find(lang =>
      lang.name === localStorage.getItem('language'));
  }

  ngOnDestroy(): void { this.subscription?.unsubscribe(); }
}
