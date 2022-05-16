import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LocalizationService } from '../core/internationalization/_services/localization.service';
import { LangAvailableArray } from '../shared/arrays/lang-available.array';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  // import array witch countries
  langsAvaliable = LangAvailableArray;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private localizationService: LocalizationService,
    private router: Router
  ) {

    // other background color in home
    this.document.body.classList.add('home-page');
  }

  learnStart(lang: string): void {

    // set lang in internationalization module
    localStorage.setItem('language', lang);
    this.localizationService.initService().then();

    this.router.navigate(['exercises']);
  }

  ngOnDestroy(): void {

    // other background color in home
    this.document.body.classList.remove('home-page');
  }
}
