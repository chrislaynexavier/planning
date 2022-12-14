import { Task } from "./task";

export class Schedule {
    public name!: string;
    public tasks: Task[] = [];

    constructor(name: string) {
        this.name = name;
    }
    addTask(task: Task) {
        this.tasks.push(new Task(task.name, task.targetDay));
    }
    tasksByWeek() {
        let daysOfWeek: Record<string, Task[]> = {
            '0': [],
            '1': [],
            '2': [],
            '3': [],
            '4': [],
            '5': [],
            '6': [],
        }
        this.tasks.forEach((task) => {
            daysOfWeek[task.targetDay].push(task);
        })
        return daysOfWeek
    }
    removeTask(task: Task) {
        const taskToRemove = task;
        this.tasks.forEach((task, index) => {
            if (task === taskToRemove) {
                this.tasks.splice(index, 1);
            }
        })
    }
}