import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesComponent } from 'src/app/exercises/exercises.component';
import { Ex00Component } from 'src/app/exercises/ex00/ex00.component';
import { Ex01Component } from 'src/app/exercises/ex01/ex01.component';
import { Ex02Component } from 'src/app/exercises/ex02/ex02.component';
import { Ex03Component } from 'src/app/exercises/ex03/ex03.component';
import { Ex04Component } from 'src/app/exercises/ex04/ex04.component';
import { Ex05Component } from 'src/app/exercises/ex05/ex05.component';

const routes: Routes = [
  {
    path: '',
    component: ExercisesComponent,
    children: [
      { path: '', component: Ex00Component },
      { path: 'ex-01', component: Ex01Component },
      { path: 'ex-02', component: Ex02Component },
      { path: 'ex-03', component: Ex03Component },
      { path: 'ex-04', component: Ex04Component },
      { path: 'ex-05', component: Ex05Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule {}
