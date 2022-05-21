import { Component, OnInit } from '@angular/core';
import { ShuffleWordsHelper } from "./_utils/shuffle-words.helper";
import { SummaryBtnType } from "../../shared/components/summary/_types/summary-btn.type";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { ShuffleList } from "../../shared/utils/shuffle-list.helper";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
  styleUrls: ['./ex02.component.scss']
})
export class Ex02Component implements OnInit {

  isCheck = false;

  result = 0;

  workingWordsList: { id: number, words: string[] }[] = [];

  correctListOfWords: { id: number, words: string[] }[] = ShuffleWordsHelper();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() { this.resetListOfWords(); }

  summaryEvents(btn: SummaryBtnType): void {
    switch (btn) {
      case "check":
        this.checkResult();
        break;
      case "reset":
        this.isCheck = false;
        this.resetListOfWords();
        break;
      case "next":
        this.router.navigate(['ex-03'], {
            relativeTo: this.activatedRoute.parent
          }
        ).then();
    }
  }

  drop(event: CdkDragDrop<string[]>, id: number): void {
    moveItemInArray(
      this.workingWordsList[
        this.workingWordsList.findIndex(x => x.id === id)
      ].words,
      event.previousIndex,
      event.currentIndex
    );
  }

  private checkResult(): void {

    // if check is already then end of function
    if (this.isCheck) { return; }

    this.isCheck = true;

    // count good results
    this.result = this.workingWordsList.reduce(
      (acc: number, curr: { id: number, words: string[] }) =>
        acc + (this.correctListOfWords[
          curr.id - 1
        ].words.toString() === curr.words.toString() ? 1 : 0), 0
    );
  }

  private resetListOfWords(): void {
    this.workingWordsList = ShuffleWordsHelper().map(list => {
      list.words = ShuffleList(list.words);
      return list;
    });
  }
}
