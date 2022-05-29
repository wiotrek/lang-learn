import { Component } from '@angular/core';
import { ColorListArray } from 'src/app/exercises/ex05/_arrays/color-list.array';
import { ActivatedRoute, Router } from '@angular/router';
import { ColorListModel } from 'src/app/exercises/ex05/_models/color-list.model';
import { IExerciseModel } from 'src/app/shared/interfaces/i-exercise.model';
import { ExerciseAbstract } from 'src/app/shared/abstarcts/exercise.abstract';

@Component({
  selector: 'app-ex05',
  templateUrl: './ex05.component.html',
  styleUrls: ['./ex05.component.scss']
})
export class Ex05Component extends ExerciseAbstract
  implements IExerciseModel<ColorListModel> {

  // main list to working
  workingList: ColorListModel[] = ColorListArray;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    super(false, 0, ColorListArray.length);
  }

  // check result and set score
  check(): void {

    // if check is already then end of function
    if (this.isCheck) { return; }

    // set state isCheck
    this.isCheck = true;

    // check all correct response in workingAnswers list
    this.result = this.workingList.reduce(
      (acc: number, curr: ColorListModel) =>
        acc + (
          curr.name.toLocaleLowerCase() === curr.value.toLocaleLowerCase()
            ? 1 : 0
        ), 0
    );
  }

  // set off check state and reset user value
  reset(): void {

    // reset user values
    this.workingList.map(c => {
      c.value = '';
      return c;
    });

    // set off isCheck
    this.isCheck = false;
  }

  next(): void {
    this.router.navigate([''], {
      relativeTo: this.activatedRoute
    }).then();
  }
}
