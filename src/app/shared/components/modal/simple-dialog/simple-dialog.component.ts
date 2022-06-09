import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-simple-dialog',
  template: `
    <h1 mat-dialog-title>{{builder.header | translate}}</h1>
    <div mat-dialog-content>
      {{builder.description | translate}}
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close cdkFocusInitial>
        {{builder.btn | translate}}
      </button>
    </div>
  `
})
export class SimpleDialogComponent {

  // title, description and btn of result-modal
  @Input() builder = {
    header: '',
    description: '',
    btn: ''
  };

  constructor(public dialogRef: MatDialogRef<SimpleDialogComponent>) { }
}
