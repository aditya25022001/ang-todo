import { UiService } from './../../services/ui.service';
import { Component } from '@angular/core';
import { Task } from 'src/app/data';
import { TaskService } from 'src/app/services/task.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  content:string = ""
  dateTime:string = ""
  priority:number = 1
  show:boolean = false;
  subscription:Subscription | undefined

  constructor(private taskService:TaskService, private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((show) => this.show=show)
  }

  ngOnInit():void{}

  addTask():void{
    if(!this.content || !this.dateTime || !this.priority) alert("All fields are required.");
    else if(this.priority>3 || this.priority<1) alert("Priority mut be between 1 and 3");
    else {
      let task:Task = {
        content:this.content,
        dateTime:this.dateTime,
        priority:this.priority
      }
      this.taskService.addTask(task);
      setTimeout(() => {
        window.location.reload();
      },1500)
    }
  }
}
