import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ExercisesComponent} from "./exercises/exercises.component";
import { Ex00Component } from './exercises/ex00/ex00.component';
import { Ex01Component } from './exercises/ex01/ex01.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'exercises',
    component: ExercisesComponent,
    children: [
      { path: '', component: Ex00Component },
      { path: 'ex-01', component: Ex01Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
