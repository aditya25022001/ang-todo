import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  name:string = "Todo List"

  constructor(){}

  ngOnInit():void{}

  toggleForm(){
    console.log("toggle form")
  }
}
