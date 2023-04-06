import * as moment from 'moment'
export interface Task{
  id:string,
  content:string,
  reminder:boolean,
  priority:number,
  dateTime:string
}
export const TASKS:Task[] = [
  {
    id:"string",
    content:"Doctor appointment",
    reminder:true,
    priority:1,
    dateTime : moment(new Date()).format("MMM Do YY")
  },
  {
    id:"string",
    content:"Go to temple",
    reminder:true,
    priority:2,
    dateTime : moment(new Date()).format("MMM Do YY")
  },
  {
    id:"string",
    content:"Make angular app",
    reminder:false,
    priority:1,
    dateTime : moment(new Date()).format("MMM Do YY")
  },
  {
    id:"string",
    content:"Go to gym",
    reminder:true,
    priority:3,
    dateTime : moment(new Date()).format("MMM Do YY")
  },
  {
    id:"string",
    content:"Complete typescript",
    reminder:false,
    priority:2,
    dateTime : moment(new Date()).format("MMM Do YY")
  },
]
