import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { ColorListArray } from 'src/app/exercises/ex05/_arrays/color-list.array';
import { ActivatedRoute, Router } from '@angular/router';
import { ColorListModel } from 'src/app/exercises/ex05/_models/color-list.model';
import { IExerciseModel } from 'src/app/shared/interfaces/i-exercise.model';
import { ExerciseAbstract } from 'src/app/shared/abstarcts/exercise.abstract';
import { PlaceholderDirective } from 'src/app/shared/directives/placeholder/placeholder.directive';
import { ResultModalComponent } from 'src/app/shared/components/modal/result-modal/result-modal.component';
import { LocalizationService } from 'src/app/core/internationalization/_services/localization.service';
import { ExercisesService } from 'src/app/exercises/_services/exercises.service';

@Component({
  selector: 'app-ex05',
  templateUrl: './ex05.component.html',
  styleUrls: ['./ex05.component.scss']
})
export class Ex05Component extends ExerciseAbstract
  implements IExerciseModel<ColorListModel>, OnDestroy {

  @ViewChild(PlaceholderDirective, { static: false })
  modalHost: PlaceholderDirective | undefined;

  // main list to working
  workingList: ColorListModel[] = ColorListArray;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private localizationService: LocalizationService,
    private exercisesService: ExercisesService
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

    this.exercisesService.setResultToLocalStorage(
      this.localizationService.localeId, 'ex-05', 5, this.result
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

  // open result-modal component
  next(): void {

    const modalCmpFactory = this.componentFactoryResolver
      .resolveComponentFactory(ResultModalComponent);

    if (this.modalHost) {
      const hostViewContainerRef = this.modalHost.viewContainerRef;
      hostViewContainerRef.clear();

      const componentRef = hostViewContainerRef
        .createComponent<ResultModalComponent>(modalCmpFactory);

      componentRef.instance.exerciseResult =
        this.exercisesService.getAllResultsFromLocalStorage(
          this.localizationService.localeId
        );

      componentRef.instance.result =
        this.exercisesService.getEndResult(this.localizationService.localeId);

      componentRef.instance.closeModal.subscribe(() => {

        hostViewContainerRef.clear();

        this.exercisesService
          .resetSessionResult(this.localizationService.localeId);

        this.router.navigate(
          ['/'], { relativeTo: this.activatedRoute }
        ).then();
      });
    }
  }

  ngOnDestroy(): void { this.reset(); }
}
