export class Task {
    public name!: string;
    public done: boolean = false;
    public createdDate: Date = new Date();
    public targetDay!: number;
    public conclusionDate!: Date;

    constructor(name: string, targetDay: number) {
        this.name = name;
        this.targetDay = targetDay;
    }

    complete() {
        this.done = true;
        this.conclusionDate = new Date();
    }
}