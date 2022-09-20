import { Task } from "./task";

export class Schedule{
    public name!:string;
    public tasks:Task[] = [];
    
    constructor(name:string){
        this.name = name;
    }
    addTask(task:Task){
        this.tasks.push(task);
    }
    tasksByWeek(){
        let daysOfWeek:Record<string,Task[]> = {
            '0': [],
            '1': [],
            '2': [],
            '3': [],
            '4': [],
            '5': [],
            '6': [],
        } 
        this.tasks.forEach((task) => {
            daysOfWeek[task.targetDate.getDay()].push(task);
        })
        return daysOfWeek
    }
}