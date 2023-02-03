import { Component } from '@angular/core';
import { SnackService } from './snack/snack.service';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Componentes';

  constructor(private _snackBar: SnackService){}

  //Table
  users:User[]=[
    {
      email:'pepin',
      nombreUsuario:'papum'
    },
    {
      email:'peasdpin',
      nombreUsuario:'paasdapum'
    },
    {
      email:'pepdfbdfbin',
      nombreUsuario:'padfbdfbpum'
    }
  ]
  columns:string[]= ['nombre','email'];
  titles:string[]= ['Nombre de Usuario','Email'];
  props:string[]=['nombreUsuario','email'];
  appearance:string='outline';

  //Button
  text:string="Abrí Snack Bar";
  color:string="primary";
  icon:string="more_vert";
  clickButton(){
    console.log('click');
  }

  //Snack
  ShowSnack(){
    this._snackBar.openSnackBar('Probando snack bar','warning',120000);
  }

}
