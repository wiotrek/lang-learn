import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './view/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { CoreModule } from "./core/core.module";
import { Ex01Component } from './exercises/ex01/ex01.component';
import { Ex00Component } from './exercises/ex00/ex00.component';
import { IdStrListPipe } from './exercises/ex01/_pipes/id-str-list.pipe';
import { Ex02Component } from './exercises/ex02/ex02.component';
import { SharedModule } from "./shared/shared.module";
import { Ex03Component } from './exercises/ex03/ex03.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExercisesComponent,
    Ex01Component,
    Ex00Component,
    IdStrListPipe,
    Ex02Component,
    Ex03Component
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
