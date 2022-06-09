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
import { PlaceholderDirective } from 'src/app/shared/directives/placeholder/placeholder.directive';
import { ResultModalComponent } from 'src/app/shared/components/modal/result-modal/result-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SimpleDialogComponent } from './components/modal/simple-dialog/simple-dialog.component';

@NgModule({
  declarations: [

    // components
    SummaryComponent,
    TaskHeadlineComponent,
    UniversalExerciseComponent,
    ResultModalComponent,
    SimpleDialogComponent,

    // directives
    PlaceholderDirective
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
    MatDialogModule,

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
    ResultModalComponent,
    SimpleDialogComponent,

    // directives
    PlaceholderDirective,

    // local plugins
    InternationalizationModule,

    // angular material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    DragDropModule,

    // another plugins
    FontAwesomeModule
  ]
})
export class SharedModule {}
