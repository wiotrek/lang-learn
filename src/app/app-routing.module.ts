import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ExercisesComponent } from "./exercises/exercises.component";
import { Ex00Component } from './exercises/ex00/ex00.component';
import { Ex01Component } from './exercises/ex01/ex01.component';
import { Ex02Component } from "./exercises/ex02/ex02.component";
import {Ex03Component} from "./exercises/ex03/ex03.component";
import {Ex04Component} from "./exercises/ex04/ex04.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'exercises',
    component: ExercisesComponent,
    children: [
      { path: '', component: Ex00Component },
      { path: 'ex-01', component: Ex01Component },
      { path: 'ex-02', component: Ex02Component },
      { path: 'ex-03', component: Ex03Component },
      { path: 'ex-04', component: Ex04Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
