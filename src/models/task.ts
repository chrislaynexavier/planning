export class Task{
    public name!:string;
    public done: boolean = false;
    public createdDate: Date = new Date();
    public targetDate!: Date;
    public conclusionDate!: Date;

    constructor(name:string, targetDate:Date){
        this.name = name;
        this.targetDate = targetDate;
    }

    complete(){
        this.done = true;
        this.conclusionDate = new Date();
    }
}