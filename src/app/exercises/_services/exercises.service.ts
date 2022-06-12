import { Injectable } from '@angular/core';
import { ResultModel } from 'src/app/exercises/_services/_models/result.model';

@Injectable({ providedIn: 'root' })
export class ExercisesService {

  // create object Map
  private resultMapper: Map<string, ResultModel[]> = new Map();

  getEndResult(lang: string): number {

    const result = this.getAllResultsFromLocalStorage(lang);

    return result.reduce((acc: number, curr: ResultModel) =>
      acc + curr.points, 0);
  }

  // get name for last exercise in array to create path
  getRecentlyExercise(lang: string): string | null {
    const recently = this.getAllResultsFromLocalStorage(lang);

    return recently.length > 0
      ? recently[recently.length - 1].name : null;
  }

  // reset points for any exercise and start again
  // from first task
  resetSessionResult(lang: string): void {

    const getItemFromLocalStorage = localStorage.getItem('langResult');
    if (!getItemFromLocalStorage) { return; }

    const resultParse = JSON.parse(getItemFromLocalStorage);

    this.resultMapper.clear();

    // save mapper state without lang which will be reset
    resultParse.forEach((x: [string, ResultModel[]]) => {
      if (x[0] !== lang) {
        this.resultMapper.set(x[0], x[1]);
      }
    });

    // prepare to stringify
    const alreadyToStringify = Array.from(this.resultMapper);

    // set config in localstorage
    localStorage.setItem('langResult', JSON.stringify(alreadyToStringify));
  }

  // set points for specific task, and go again
  // from recently task
  setResultToLocalStorage(
    lang: string,
    exerciseName: string,
    exerciseSeq: number,
    exercisePoints: number
  ): void {

    const getItemFromLocalStorage = localStorage.getItem('langResult');

    if (getItemFromLocalStorage) {
      const resultParse = JSON.parse(getItemFromLocalStorage);

      // getting all table configs
      resultParse.forEach((x: [string, ResultModel[]]) =>
        this.resultMapper.set(x[0], x[1]));
    }

    // assign new config or update
    const resultArr: ResultModel[] = this.resultMapper.get(lang) ?? [];
    const findResultObj = resultArr.find(r => r.name === exerciseName);

    // add to existing element or create new
    if (findResultObj) {
      const findResultIndex = resultArr.indexOf(findResultObj);
      resultArr[findResultIndex].points = exercisePoints;
    } else {
      resultArr.push({
        name: exerciseName,
        sequence: exerciseSeq,
        points: exercisePoints
      });
    }

    // set sequence of exercises
    resultArr.sort((a: ResultModel, b:ResultModel) => a.sequence - b.sequence);

    // assign to mapper
    this.resultMapper.set(lang, resultArr);

    // prepare to stringify
    const alreadyToStringify = Array.from(this.resultMapper);

    // set config in localstorage
    localStorage.setItem('langResult', JSON.stringify(alreadyToStringify));
  }

  // get points from all task by specific language
  getAllResultsFromLocalStorage(lang: string): ResultModel[] {

    const getItemFromLocalStorage = localStorage.getItem('langResult');
    if (!getItemFromLocalStorage) { return []; }

    const resultParse = JSON.parse(getItemFromLocalStorage);

    // getting all table configs
    resultParse.forEach((x: [string, ResultModel[]]) =>
      this.resultMapper.set(x[0], x[1]));

    return this.resultMapper.get(lang) ?? [];
  }
}
