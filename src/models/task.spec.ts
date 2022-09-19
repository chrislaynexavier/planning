import {Task} from "./task"

let newTask:Task;

describe("task", () => {
    beforeEach( () => {
        newTask = new Task("Go to the gym", new Date("10/3/22"));
    })

    it("should create a new task",() => {
        expect(newTask.name).toBe("Go to the gym");
    })

    it("should be created like not done by default", () => {
        expect(newTask.done).toBeFalsy();
    })

    it("should has created date",() => {
        expect(newTask.createdDate.getDate()).toBe(new Date().getDate());
    })

    it("should has target date",() => {
        expect(newTask.targetDate.getDate()).toBe(3);
        expect(newTask.targetDate.getMonth()).toBe(9);
        expect(newTask.targetDate.getFullYear()).toBe(2022);
    })

    it.skip("should complete a task", () => {
        
    })
})