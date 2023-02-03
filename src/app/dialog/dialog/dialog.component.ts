import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  message:string = "";
  confirm:string = "";
  cancel:string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  private _dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.message = this.data.message;
    this.confirm = this.data.buttonText.ok;
    this.cancel = this.data.buttonText.cancel;
  }

}
