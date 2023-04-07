import { Component, Output, EventEmitter  } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  name:string = "Todo List"
  show:boolean = false
  subscription:Subscription | undefined;

  @Output() toggle = new EventEmitter<boolean>()

  constructor(private uiService:UiService){
    this.subscription = this.uiService.onToggle().subscribe((show) => this.show=show)
  }

  ngOnInit():void{}

  toggleForm(){
    this.uiService.toggleShow()
  }
}
