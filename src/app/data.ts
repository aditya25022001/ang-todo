import * as moment from 'moment'
export interface Task{
  id?:string,
  content:string,
  priority:number,
  dateTime:string
}
export const TASKS:Task[] = [
  {
    id:"string",
    content:"Doctor appointment",
    priority:1,
    dateTime : moment(new Date()).format("MMM Do YY")
  },
  {
    id:"string",
    content:"Go to temple",
    priority:2,
    dateTime : moment(new Date()).format("MMM Do YY")
  },
  {
    id:"string",
    content:"Make angular app",
    priority:1,
    dateTime : moment(new Date()).format("MMM Do YY")
  },
  {
    id:"string",
    content:"Go to gym",
    priority:3,
    dateTime : moment(new Date()).format("MMM Do YY")
  },
  {
    id:"string",
    content:"Complete typescript",
    priority:2,
    dateTime : moment(new Date()).format("MMM Do YY")
  },
]
