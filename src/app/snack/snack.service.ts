import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from './snack.component';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, classes:string, duracion:number) {
    this._snackBar.openFromComponent(SnackComponent, {
      duration: duracion * 1000,
      panelClass:classes,
      data:{
        message:message
      }
    });
  }
  
}
