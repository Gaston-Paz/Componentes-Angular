import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-basic',
  templateUrl: './button-basic.component.html',
  styleUrls: ['./button-basic.component.css']
})
export class ButtonBasicComponent implements OnInit {

  @Input('text')text:string='';
  @Input('color')color:string='';
  @Input('disabled')disabled:boolean=false;

  @Output() clickButton = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  clickearon(ev:MouseEvent){
    this.clickButton.emit(ev);    
  }

}
