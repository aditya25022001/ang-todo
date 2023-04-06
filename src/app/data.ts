import * as moment from 'moment'
export interface Task{
  id:number,
  content:string,
  reminder:boolean,
  priority:number,
  dateTime:string
}
export const TASKS:Task[] = [
  {
    id:1,
    content:"Doctor appointment",
    reminder:true,
    priority:1,
    dateTime : moment(new Date()).format("MMM Do YY")
  },
  {
    id:2,
    content:"Go to temple",
    reminder:true,
    priority:2,
    dateTime : moment(new Date()).format("MMM Do YY")
  },
  {
    id:3,
    content:"Make angular app",
    reminder:false,
    priority:1,
    dateTime : moment(new Date()).format("MMM Do YY")
  },
  {
    id:4,
    content:"Go to gym",
    reminder:true,
    priority:3,
    dateTime : moment(new Date()).format("MMM Do YY")
  },
  {
    id:5,
    content:"Complete typescript",
    reminder:false,
    priority:2,
    dateTime : moment(new Date()).format("MMM Do YY")
  },
]
