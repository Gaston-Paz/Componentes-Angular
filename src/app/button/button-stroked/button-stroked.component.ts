import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-stroked',
  templateUrl: './button-stroked.component.html',
  styleUrls: ['./button-stroked.component.css']
})
export class ButtonStrokedComponent implements OnInit {

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
