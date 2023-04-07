import { Component } from '@angular/core';
import { Task } from 'src/app/data';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  content:string = ""
  dateTime:string = ""
  priority:number = 1

  constructor(private taskService:TaskService){}

  ngOnInit():void{}

  addTask():void{
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
