import { SummaryBtnType } from 'src/app/shared/components/summary/_types/summary-btn.type';

// building exercise component
export interface IExerciseModel<T> {

  // set or get current state of exercise
  isCheck: boolean;

  // amount of good resolve task
  result: number;

  // amount of all task to working
  amount: number;

  // main list to working in exercise
  workingList: T[];

  // emit property btn from summary
  summaryEvents(btn: SummaryBtnType): void;

  // if btn equal check, then execute procedure
  check(): void;

  // if btn equal check, then execute procedure
  reset(): void;
}
