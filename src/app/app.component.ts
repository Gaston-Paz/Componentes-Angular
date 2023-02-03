import { Component } from '@angular/core';
import { SnackService } from './snack/snack.service';
import { User } from './user.interface';
import { DialogComponent } from './dialog/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Componentes';

  constructor(private _snackBar: SnackService,
    private _dialog: MatDialog){}

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
  textDialog:string="Abrí el Dialog";
  color:string="primary";
  icon:string="more_vert";
  iconDelete:string="delete";
  iconHome:string="home";
  clickButton(){
    console.log('click');
  }

  //Snack
  ShowSnack(){
    this._snackBar.openSnackBar('Probando snack bar','warning',120000);
  }

  //Dialog
  ShowDialog(){
    const dialogRef = this._dialog.open(DialogComponent, {
      data: {
        message:
          "¿Desa confirmar?",
        buttonText: {
          ok: "Confirmar",
          cancel: "Cancelar",
        }
      },
    });

    dialogRef.afterClosed().subscribe((confirm: boolean) => {});
  }
}
