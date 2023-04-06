import { Component } from '@angular/core';
import { TASKS } from 'src/app/data';
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
    this.taskService.getTasks().subscribe((tasks) => this.tasks=tasks)
  }

  onClick(id:number):void{
    console.log("delete task",id)
  }

}
