import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Ex01Component } from 'src/app/exercises/ex01/ex01.component';
import { Ex02Component } from 'src/app/exercises/ex02/ex02.component';
import { Ex03Component } from 'src/app/exercises/ex03/ex03.component';
import { Ex04Component } from 'src/app/exercises/ex04/ex04.component';
import { Ex05Component } from 'src/app/exercises/ex05/ex05.component';
import { ExercisesComponent } from 'src/app/exercises/exercises.component';
import { IdStrListPipe } from 'src/app/exercises/ex01/_pipes/id-str-list.pipe';
import { SelectAnswersPipe } from 'src/app/exercises/ex03/_pipes/select-answers.pipe';
import { ExercisesRoutingModule } from 'src/app/exercises/exercises-routing.module';
import { Ex00Component } from 'src/app/exercises/ex00/ex00.component';

@NgModule({
  declarations: [

    // exercises components
    ExercisesComponent,
    Ex00Component,
    Ex01Component,
    Ex02Component,
    Ex03Component,
    Ex04Component,
    Ex05Component,

    // pipes
    IdStrListPipe,
    SelectAnswersPipe
  ],
  imports: [
    ExercisesRoutingModule,
    SharedModule
  ]
})
export class ExercisesModule {}
