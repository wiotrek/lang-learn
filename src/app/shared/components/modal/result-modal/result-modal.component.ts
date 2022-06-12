import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResultModel } from 'src/app/exercises/_services/_models/result.model';

@Component({
  selector: 'app-result-modal',
  templateUrl: './result-modal.component.html',
  styleUrls: ['./result-modal.component.scss']
})
export class ResultModalComponent {

  // display user score
  @Input() result = 0;

  // list of exercises with their points
  @Input() exerciseResult: ResultModel[] = [];

  // emit user click btn
  @Output() closeModal = new EventEmitter<void>();
}
