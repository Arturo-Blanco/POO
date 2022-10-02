export class Person {
    protected name:string;
    protected surname:string;
    protected age:number;
    protected gender:string;
    protected height:number;

    protected constructor(pName:string,pSurname:string,pAge:number,pGender:string,pHeight:number){
        this.name=pName;
        this.surname=pSurname;
        this.age=pAge;
        this.gender=pGender;
        this.height=pHeight;
    }    
    public getName():string{
        return this.name;
    }
    public getSurname():string{
        return this.surname;
    }
    public getAge():number{
        return this.age;
    }
    public getGender():string{
        return this.gender;
    }
    public getHeight():number{
        return this.height;
    }
    public setName(newName:string):void{
        this.name=newName;
    }
    public setSurname(newSurname:string):void{
        this.surname=newSurname;
    }
    public setAge(newAge:number):void{
        this.age=newAge;
    }
    public setGender(newGender:string):void{
        this.gender=newGender;
    }
    public setHeight(newHeight:number):void{
        this.height=newHeight;
    }
}