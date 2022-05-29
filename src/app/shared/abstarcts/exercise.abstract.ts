import { SummaryBtnType } from 'src/app/shared/components/summary/_types/summary-btn.type';

// building exercise component
export abstract class ExerciseAbstract {

  // set or get current state of exercise
  isCheck: boolean;

  // amount of good resolve task
  result: number

  // amount of all task to working
  amount: number;

  protected constructor(
    isCheck: boolean,
    result: number,
    amount: number
  ) {
    this.isCheck = isCheck;
    this.result = result;
    this.amount = amount
  }

  // catch events from bottom summary section
  summaryEvents(btn: SummaryBtnType): void {
    switch (btn) {
      case "check":
        this.check();
        break;
      case "reset":
        this.reset();
        break;
      case "next":
        this.next();
        break;

      default:
        break;
    }
  }

  // check result and set score
  protected abstract check(): void;

  // set off check state and restart list
  protected abstract reset(): void;

  // go to next exercise
  protected abstract next(): void;
}
