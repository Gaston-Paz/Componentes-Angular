import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackComponent } from './snack.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [
    SnackComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    ButtonModule
  ],
  exports:[
    SnackComponent
  ]
})
export class SnackModule { }
