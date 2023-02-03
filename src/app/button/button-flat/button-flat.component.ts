import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-flat',
  templateUrl: './button-flat.component.html',
  styleUrls: ['./button-flat.component.css']
})
export class ButtonFlatComponent implements OnInit {

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
