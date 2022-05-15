import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './view/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { HomeComponent } from './home/home.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { CoreModule } from "./core/core.module";
import { Ex01Component } from './exercises/ex01/ex01.component';
import { Ex00Component } from './exercises/ex00/ex00.component';
import {MatMenuModule} from "@angular/material/menu";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatInputModule} from "@angular/material/input";
import {DragDropModule} from "@angular/cdk/drag-drop";
import { IdStrListPipe } from './exercises/ex01/_pipes/id-str-list.pipe';
import { Ex02Component } from './exercises/ex02/ex02.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExercisesComponent,
    Ex01Component,
    Ex00Component,
    IdStrListPipe,
    Ex02Component
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CoreModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatInputModule,
        FontAwesomeModule,
        DragDropModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
