import { Component, OnInit } from '@angular/core';
import { ShuffleWordsHelper } from "./_utils/shuffle-words.helper";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { ShuffleList } from "../../shared/utils/shuffle-list.helper";
import { ActivatedRoute, Router } from "@angular/router";
import { ExerciseAbstract } from 'src/app/shared/abstarcts/exercise.abstract';
import { WordModel } from 'src/app/exercises/ex02/_models/word.model';
import { IExerciseModel } from 'src/app/shared/interfaces/i-exercise.model';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
  styleUrls: ['./ex02.component.scss']
})
export class Ex02Component extends ExerciseAbstract
  implements IExerciseModel<WordModel>, OnInit {

  // main list to working
  workingList: WordModel[] = [];

  // list only for checking workingList
  correctListOfWords: WordModel[] = ShuffleWordsHelper();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    super(false, 0, 0);
  }

  ngOnInit() { this.shuffleWordList(); }

  drop(event: CdkDragDrop<string[]>, id: number): void {
    moveItemInArray(
      this.workingList[
        this.workingList.findIndex(x => x.id === id)
      ].words,
      event.previousIndex,
      event.currentIndex
    );
  }

  check(): void {

    // if check is already then end of function
    if (this.isCheck) { return; }

    // set state isCheck
    this.isCheck = true;

    // count good results
    this.result = this.workingList.reduce(
      (acc: number, curr: WordModel) =>
        acc + (this.correctListOfWords[
          curr.id - 1
        ].words.toString() === curr.words.toString() ? 1 : 0), 0
    );
  }

  next(): void {
    this.router.navigate(['ex-03'], {
        relativeTo: this.activatedRoute.parent
      }
    ).then();
  }

  reset(): void {

    // shuffle list again
    this.workingList = ShuffleWordsHelper().map(list => {
      list.words = ShuffleList(list.words);
      return list;
    });

    // set off isCheck
    this.isCheck = false;
  }

  // shuffle list again
  private shuffleWordList(): void {
    this.workingList = ShuffleWordsHelper().map(list => {
      list.words = ShuffleList(list.words);
      return list;
    });

    // assign length of tasks
    this.amount = this.workingList.length;
  }
}
