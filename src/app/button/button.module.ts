import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import { ButtonBasicComponent } from './button-basic/button-basic.component';
import { ButtonRaisedComponent } from './button-raised/button-raised.component';
import { ButtonStrokedComponent } from './button-stroked/button-stroked.component';
import { ButtonFlatComponent } from './button-flat/button-flat.component';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import {MatIconModule} from '@angular/material/icon';
import { ButtonFabComponent } from './button-fab/button-fab.component';
import { ButtonMinifabComponent } from './button-minifab/button-minifab.component';

@NgModule({
  declarations: [
    ButtonBasicComponent,
    ButtonRaisedComponent,
    ButtonStrokedComponent,
    ButtonFlatComponent,
    ButtonIconComponent,
    ButtonFabComponent,
    ButtonMinifabComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
    ButtonBasicComponent,
    ButtonRaisedComponent,
    ButtonStrokedComponent,
    ButtonFlatComponent,
    ButtonIconComponent,
    ButtonFabComponent,
    ButtonMinifabComponent
  ]
})
export class ButtonModule { }
