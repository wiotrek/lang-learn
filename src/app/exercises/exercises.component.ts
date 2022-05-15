import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';
import { LangAvaliable } from '../shared/consts/lang-avaliable.const';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnDestroy {

  chosenCountry: {
    name: string;
    display: string;
    flag: string;
  } | undefined;

  exNumber: string | undefined;
  langAvailable = LangAvaliable;

  subscription: Subscription | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

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

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
