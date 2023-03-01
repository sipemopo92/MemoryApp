import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-end-dialog',
  templateUrl: './end-dialog.component.html',
  styleUrls: ['./end-dialog.component.scss']
})
export class EndDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {win: boolean}) { }

}
