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
    tasks.forEach((task) => {
        if (req.body.name_task === task.name) {
            schedule.addTask(task);
        }
    })
    res.json({ schedule: schedule });
})

app.post('/remove_task', (req: any, res: any) => {
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

app.get('/task', (req: any, res: any) => {
    res.json({ tasks: tasks });
})

app.get('/schedule', (req: any, res: any) => {
    res.json({ schedule: schedule });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
