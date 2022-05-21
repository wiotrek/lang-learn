import { Pipe, PipeTransform } from '@angular/core';
import { Answers } from "../_models/working-text.model";

@Pipe({ name: 'selectAnswers' })
export class SelectAnswersPipe implements PipeTransform {

  transform(answers: Answers[], answersId: number): string[] {
    return answers[answersId].all;
  }
}
