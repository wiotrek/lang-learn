import { NgModule } from '@angular/core';

import { AppComponent } from './view/app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from "./shared/shared.module";
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'exercises',
    loadChildren: () => import('./exercises/exercises.module')
      .then(m => m.ExercisesModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    }),
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
