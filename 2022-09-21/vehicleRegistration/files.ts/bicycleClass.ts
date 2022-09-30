import { Vehicle } from "./automotiveClass";

export class Bicycle extends Vehicle {
    private spokesNumbers:number;

    public constructor(pBrand:string,pModel:string,pYear:number,pColour:string,pSpokesNumbers:number,pEngine?:boolean){
        super(pBrand,pModel,pYear,pColour,'','');
        this.spokesNumbers=pSpokesNumbers;
    }
    public getSpokesNumber():number{
        return this.spokesNumbers;
    }
    public setSpokesNumber(newNumber:number):void{
        this.spokesNumbers=newNumber;
    }
}
let bycicle1:Bicycle=new Bicycle('Trek','Mountain',2022,'Negro',26,false);
let bycicle2:Bicycle=new Bicycle('Venzo','Loki',2020,'Blanco',24,false);
let bycicle3:Bicycle=new Bicycle('Shimano','PKR',2021,'Negro',26,false);
let registeredBycicle:Bicycle[]=[bycicle1,bycicle2,bycicle3];