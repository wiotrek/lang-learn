import { NgModule } from "@angular/core";
import { SummaryComponent } from "./components/summary/summary.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatInputModule } from "@angular/material/input";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { CoreModule} from "../core/core.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { TaskHeadlineComponent } from './components/task-headline/task-headline.component';
import { UniversalExerciseComponent } from './components/universal-exercise/universal-exercise.component';

@NgModule({
  declarations: [
    SummaryComponent,
    TaskHeadlineComponent,
    UniversalExerciseComponent
  ],
  imports: [
    // angular core
    BrowserAnimationsModule,
    BrowserModule,

    // angular material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    DragDropModule,

    // local plugins
    CoreModule,

    // another plugins
    FontAwesomeModule
  ],
  exports: [
    // angular core
    BrowserAnimationsModule,
    BrowserModule,

    // declare components
    SummaryComponent,

    // angular material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    DragDropModule,

    // local plugins
    CoreModule,

    // another plugins
    FontAwesomeModule,
    TaskHeadlineComponent,
    UniversalExerciseComponent
  ]
})
export class SharedModule {}
