import { Mammal } from "./mammalClass";
export class Omnivore extends Mammal{
    constructor(pAnimalName:string,pAge:number,pMovementType:string,pWeight:number,pFur:boolean){
        super(pAnimalName,pAge,pMovementType,pWeight,pFur);
    }
    public feed():void{
        this.eat();
        console.log(`Los omnivoros de alimentan con una dieta de plantas y carnes.`);
    }
}