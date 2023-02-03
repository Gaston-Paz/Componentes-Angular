import { Component } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Componentes';

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
  text:string="Apreta";
  color:string="primary";
  icon:string="more_vert";
  clickButton(){
    console.log('click');
  }

}
