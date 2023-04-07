import { Component } from '@angular/core';
import { Task } from 'src/app/data';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  tasks : Task[] = []

  constructor(private taskService:TaskService){}

  ngOnInit():void{
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(id:string|undefined):void{
    this.taskService.deleteTask(id);
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  updatePriority(task:Task):void{
    task.priority = task.priority%3+1;
    this.taskService.updateTaskPriority(task,task.priority);
  }

}
