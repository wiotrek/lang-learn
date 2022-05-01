import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex00',
  templateUrl: './ex00.component.html',
  styleUrls: ['./ex00.component.scss']
})
export class Ex00Component implements OnInit {

  amount = 7;

  constructor() { }

  ngOnInit(): void {
  }

}
