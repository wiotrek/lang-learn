import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  langsAvaliable = [
    {
      name: 'French',
      flag: 'c/c3/Flag_of_France.svg'
    },
    {
      name: 'English',
      flag: 'a/ae/Flag_of_the_United_Kingdom.svg'
    },
    {
      name: 'German',
      flag: 'b/ba/Flag_of_Germany.svg'
    }
  ]

  constructor(
    @Inject(DOCUMENT) private document: any
  ) {

    // other background color in sign in
    this.document.body.classList.add('home-page');
  }

  ngOnInit(): void {
  }

}
