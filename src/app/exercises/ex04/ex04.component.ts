import { Component } from '@angular/core';
import { DigitListArray } from 'src/app/exercises/ex04/_arrays/digit-list.array';
import { ShuffleList } from 'src/app/shared/utils/shuffle-list.helper';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseAbstract } from 'src/app/shared/abstarcts/exercise.abstract';
import { IExerciseModel } from 'src/app/shared/interfaces/i-exercise.model';
import { WorkingElementModel } from 'src/app/shared/models/working-element.model';

@Component({
  selector: 'app-ex04',
  templateUrl: './ex04.component.html',
  styleUrls: ['./ex04.component.scss']
})
export class Ex04Component extends ExerciseAbstract
 implements IExerciseModel<WorkingElementModel> {

  // main list for working
  workingList: WorkingElementModel[] = ShuffleList(DigitListArray);

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    super(false, 0, DigitListArray.length);
  }

  // check result and set score
  check(): void {

    // if check is already then end of function
    if (this.isCheck) { return; }

    // set state isCheck
    this.isCheck = true;

    // check all correct response in workingAnswers list
    this.result = this.workingList.reduce(
      (acc: number, curr: WorkingElementModel, ind: number) =>
        acc + (curr.id === ind + 1 ? 1 : 0), 0
    );
  }

  // change order in list
  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.workingList, event.previousIndex, event.currentIndex);
  }

  next(): void {
    this.router.navigate(['ex-05'], {
      relativeTo: this.activatedRoute.parent
    }).then();
  }

  // set off check state and shuffle list
  reset(): void {

    // shuffle list
    this.workingList = ShuffleList(DigitListArray);

    // set off isCheck
    this.isCheck = false;
  }
}
