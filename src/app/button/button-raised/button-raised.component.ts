import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-raised',
  templateUrl: './button-raised.component.html',
  styleUrls: ['./button-raised.component.css']
})
export class ButtonRaisedComponent implements OnInit {

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
