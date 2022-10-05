export class Mammal {
    protected animalName:string;
    protected age:number;
    protected typeFood:string;
    protected movementType:string;
    protected weight:number;
    protected fur:boolean;
    
    protected constructor(pAnimalName:string,pAge:number,pTypeFood:string,pMovementType:string,pWeight:number,pFur:boolean){
        this.animalName=pAnimalName;
        this.age=pAge;
        this.typeFood=pTypeFood;
        this.movementType=pMovementType;
        this.weight=pWeight;
        this.fur=pFur;
    }
    public getAnimalName():string{
        return this.animalName
    }
    public getAge():number{
        return this.age;
    }
    public getTypeFood():string{
        return this.typeFood;
    }
    public getMovementType():string{
        return this.movementType;
    }
    public getWeight():number{
        return this.weight;
    }
    public getFur():any{
        if(this.fur==true){
        return `El animal ${this.animalName} tiene pelaje en su cuerpo`;
        } else {
        return `El animal ${this.animalName} no tiene pelaje en su cuerpo`;
        }
    }
    public setAnimalName(newName:string):void{
        this.animalName=newName;
    }
    public setAge(newAge:number):void{
        this.age=newAge;
    }
    public setTypeFood(newTypeFood:string):void{
        this.typeFood=newTypeFood;
    }
    public setMovementType(newMovementType:string):void{
        this.movementType=newMovementType;
    }
    public setWeight(newWeight:number):void{
        this.weight=newWeight;
    }
    public setFur(newFur:boolean):void{
        this.fur=newFur;
    }
    public move(distanceMeters:number):void{
        console.log(`El animal ${this.animalName} se movió ${distanceMeters} metros.`);
    }
    public eat():void{
        console.log(`El animal ${this.animalName} se esta alimentando.`);
    }
    public sleep(hoursTime:number):void{
        console.log(`El animal ${this.animalName} durmio por ${hoursTime} horas.`);
    }
    }