import { Schedule } from "./models/schedule";
import { Task } from "./models/task";

const express = require('express');
const app = express();
const port = 3000;
let schedule!: Schedule;
let tasks: Task[] = [];

app.use(express.json());
app.use(function (req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    next()
})

app.get('/', (req: any, res: any) => {
    res.json({ req: 'aaa' })
})

app.post('/schedule', (req: any, res: any) => {
    schedule = new Schedule(req.body.name);
    res.json({ req: 'Agenda criada com sucesso' });
})

app.post('/task', (req: any, res: any) => {
    const newTask = new Task(req.body.name, req.body.day);
    tasks.push(newTask);
    res.json({ req: 'Task criada com sucesso' });
})

app.post('/add_task_schedule', (req: any, res: any) => {
    let taskToAdd!: Task
    tasks.forEach((task) => {
        if (req.body.name_task === task.name) {
            taskToAdd = task
        }
    })
    schedule.addTask(taskToAdd);
    res.json({ schedule: schedule });
})

app.post('/remove_task_schedule', (req: any, res: any) => {
    let taskToRemove!: Task;
    tasks.forEach((task) => {
        if (req.body.name_task === task.name) {
            taskToRemove = task
        }
    })
    if (taskToRemove) {
        schedule.removeTask(taskToRemove);
    }
    res.json({ schedule: schedule });
})

app.post('/complete_task', (req: any, res: any) => {
    let taskToComplete!: Task;
    schedule.tasks.forEach((task) => {
        if (req.body.name_task === task.name && !task.done) {
            taskToComplete = task
        }
    })
    taskToComplete.complete()
    res.json({ taskDone: taskToComplete.done, schedule: schedule })
})

app.get('/task', (req: any, res: any) => {
    res.json({ tasks: tasks });
})

app.get('/schedule', (req: any, res: any) => {
    res.json({ schedule: schedule });
})

app.get('/tasks_by_week', (req: any, res: any) => {
    res.json({ req: schedule.tasksByWeek() })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
