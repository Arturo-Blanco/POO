import { Mammal } from "./mammalClass";
export class Carnivore extends Mammal {
    constructor(pAnimalName:string,pAge:number,pMovementType:string,pWeight:number,pFur:boolean){
        super(pAnimalName,pAge,pMovementType,pWeight,pFur);
    }
    public feed():void{
        this.eat();
        console.log(`Los carnivoros poseen dientes y garras afiladas para desgarrar la carne de sus presas.`);
    }
}