import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ButtonModule } from '../../button/button.module';


@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ButtonModule
  ],
  exports:[
    DialogComponent
  ]
})
export class DialogModule { }
