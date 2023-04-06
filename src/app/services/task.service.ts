import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from 'src/app/data';
import { Task } from 'src/app/data';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks():Observable<Task[]>{
    const tasks = of(TASKS);
    return tasks
  }

}
