import { Component } from '@angular/core';
import { AnimalListConst } from "./animal-list.const";

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.scss']
})
export class Ex01Component {
  list = AnimalListConst;
}
