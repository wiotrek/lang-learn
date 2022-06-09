import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LocalizationService } from '../core/internationalization/_services/localization.service';
import { LangAvailableArray } from '../shared/arrays/lang-available.array';
import { MatDialog } from '@angular/material/dialog';
import { SimpleDialogComponent } from 'src/app/shared/components/modal/simple-dialog/simple-dialog.component';

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
    private router: Router,
    public dialog: MatDialog
  ) {

    // other background color in home
    this.document.body.classList.add('home-page');
  }

  openDialog(): void {

    const builder = {
      header: 'home.modal.dialog.header',
      description: 'home.modal.dialog.description',
      btn: 'home.modal.dialog.back'
    }

    this.dialog
      .open(SimpleDialogComponent, {
        width: '300px'
      }).componentInstance.builder = builder;
  }

  learnStart(lang: string): void {

    // set lang in internationalization module
    localStorage.setItem('language', lang);
    this.localizationService.initService().then();

    if (lang !== 'en-US') {
      this.openDialog();
      return;
    }

    this.router.navigate(['exercises']);
  }

  ngOnDestroy(): void {

    // other background color in home
    this.document.body.classList.remove('home-page');
  }
}
