import { Injectable } from '@angular/core';
import { Task } from 'src/app/data';
import { Firestore, collection, getDocs, deleteDoc, doc } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks:Task[] = []
  collection:any

  constructor(firestore:Firestore) {
    this.collection = collection(firestore,"todolist")
  }

  getTasks():Task[]{
    getDocs(this.collection)
    .then((getdocs) => {
      getdocs.forEach(e => {
        let data:Object = <Object>e.data();
        this.tasks.push({...data,id:e.id} as unknown as Task)
      })
    })
    .catch(err => console.error(err))
    return this.tasks
  }

  deleteTask(id:string):void{
    deleteDoc(doc(this.collection,`/${id}`))
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
  }

}
