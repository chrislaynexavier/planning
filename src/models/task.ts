export class Task{
    public name!:string;
    public done: boolean = false;
    public createdDate: Date = new Date();
    public targetDate!: Date

    constructor(name:string, targetDate:Date){
        this.name = name;
        this.targetDate = targetDate;
    }
}