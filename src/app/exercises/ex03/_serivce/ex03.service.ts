import { Injectable } from '@angular/core';
import * as some_text from '../_data/working-text.json';
import { Observable, of } from "rxjs";
import { WorkingTextModel } from "../_models/working-text.model";

@Injectable({ providedIn: 'root' })
export class Ex03Service {

  private localApiText: WorkingTextModel = some_text;

  getWorkingTextFromApi(): Observable<WorkingTextModel> {
    return of(this.localApiText);
  }
}
