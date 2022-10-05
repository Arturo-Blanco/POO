import { Mammal } from "./mammalClass";
export class Omnivore extends Mammal{
    constructor(pAnimalName:string,pAge:number,pTypeFood:string,pMovementType:string,pWeight:number,pFur:boolean){
        super(pAnimalName,pAge,pTypeFood,pMovementType,pWeight,pFur);
    }
}