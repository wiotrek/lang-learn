import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  // display user score
  @Input() result = 0;

  // emit user click btn
  @Output() closeModal = new EventEmitter<void>();
}
