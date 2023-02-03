import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-minifab',
  templateUrl: './button-minifab.component.html',
  styleUrls: ['./button-minifab.component.css']
})
export class ButtonMinifabComponent implements OnInit {

  @Input('icon')icon:string='';
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
