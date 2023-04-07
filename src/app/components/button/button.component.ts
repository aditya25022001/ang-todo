import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent{

  //props
  @Input() color:string | undefined;
  @Input() text:string | undefined;
  @Input() class:string | undefined;
  @Output() buttonClick = new EventEmitter()

  constructor(){}

  ngOnInit():void{}

  onClick(){
    this.buttonClick.emit()
  }

}
