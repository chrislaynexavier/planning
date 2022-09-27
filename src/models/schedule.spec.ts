import {Schedule} from "./schedule"
import { Task } from "./task"
describe("schedule", () => {
    let newSchedule!:Schedule
    beforeEach(() => {
        newSchedule = new Schedule("Schedule1");
    })

    it("should has name", () => {
        expect(newSchedule.name).toBe("Schedule1");
    })
    
    it("should hasn't tasks", () => {
        expect(newSchedule.tasks).toHaveLength(0);
    })

    it("should add tasks", () => {
        let newTask = new Task("ir para academia", new Date("09/20/2022"));
        newSchedule.addTask(newTask);
        expect(newSchedule.tasks).toContain(newTask);
    })
   
    it("should list tasks by week day", () => {
        let gym = new Task("ir para academia", new Date("09/20/2022"));
        let study = new Task("estudar", new Date("09/20/2022"));
        let read = new Task("ler", new Date("09/21/2022"));
        newSchedule.addTask(gym);
        newSchedule.addTask(study);
        newSchedule.addTask(read);

        const result = {
            '0': [],
            '1': [],
            '2': [gym, study],
            '3': [read],
            '4': [],
            '5': [],
            '6': [],
        }

        expect(newSchedule.tasksByWeek()).toStrictEqual(result);
    })
    
    it("shold remove tasks", () => {
        let newTask = new Task("ir para academia", new Date("09/20/2022"));
        let newTask2 = new Task("ir para trabalho", new Date("09/20/2022"));
        newSchedule.addTask(newTask);
        newSchedule.addTask(newTask2);
        newSchedule.removeTask(newTask);
        expect(newSchedule.tasks).not.toContain(newTask)
    })
})