import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-result-modal',
  templateUrl: './result-modal.component.html',
  styleUrls: ['./result-modal.component.scss']
})
export class ResultModalComponent {

  // display user score
  @Input() result = 0;

  // emit user click btn
  @Output() closeModal = new EventEmitter<void>();
}
