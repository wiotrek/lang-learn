import { NgModule } from "@angular/core";
import { SummaryComponent } from "./components/summary/summary.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatInputModule } from "@angular/material/input";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { TaskHeadlineComponent } from './components/task-headline/task-headline.component';
import { UniversalExerciseComponent } from './components/universal-exercise/universal-exercise.component';
import { FormsModule } from '@angular/forms';
import { InternationalizationModule } from 'src/app/core/internationalization/internationalization.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SummaryComponent,
    TaskHeadlineComponent,
    UniversalExerciseComponent
  ],
  imports: [

    // angular core
    CommonModule,
    FormsModule,

    // angular material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    DragDropModule,

    // local plugins
    InternationalizationModule,

    // another plugins
    FontAwesomeModule
  ],
  exports: [

    // angular core
    CommonModule,
    FormsModule,

    // declare components
    SummaryComponent,
    TaskHeadlineComponent,
    UniversalExerciseComponent,

    // angular material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    DragDropModule,

    // local plugins
    InternationalizationModule,

    // another plugins
    FontAwesomeModule
  ]
})
export class SharedModule {}
