import { Mammal } from "./mammalClass";
export class Hervibore extends Mammal{
    constructor(pAnimalName:string,pAge:number,pMovementType:string,pWeight:number,pFur:boolean){
        super(pAnimalName,pAge,pMovementType,pWeight,pFur);
}
public feed():void{
    this.eat();
    console.log(`Los herviboros poseen dientes planos para triturar las plantas y pasturas de la que se alimentan.`);
}
}