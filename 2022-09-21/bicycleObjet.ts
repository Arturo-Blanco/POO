import { Vehicle } from "./automotiveObjet";

export class Bicycle extends Vehicle {
    private spokesNumbers:number;

    public constructor(pBrand:string,pModel:string,pYear:number,pColour:string,pSpokesNumbers:number,pEngine?:boolean){
        super(pBrand,pModel,pYear,pColour);
    }
}