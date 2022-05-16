import { Component } from '@angular/core';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
  styleUrls: ['./ex02.component.scss']
})
export class Ex02Component {

  listOfShuffleWords = [
    {
      id: 1,
      words: [
        'Hello', ',', 'I am', 'Jonny Knoxville',
      ]
    }
  ];

}
