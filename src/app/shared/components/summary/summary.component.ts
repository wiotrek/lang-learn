import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SummaryBtnType } from "./_types/summary-btn.type";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {

  // hidden next page btn if isChecking
  @Input() isChecking = false;

  // special options if is finally task
  @Input() isLastTask = false;

  // when emit some button - check, reset or next
  @Output() summaryEvents = new EventEmitter<SummaryBtnType>();
}
