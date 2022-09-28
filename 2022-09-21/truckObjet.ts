import { Vehicle } from "./automotiveObjet";

export class Truck extends Vehicle {
    private trailer:string;

    public constructor(pBrand:string,pModel:string,pYear:number,pColour:string,pPatent:string,pFuelType:string,pTrailer?:string){
        super(pBrand,pModel,pYear,pColour,pPatent,pFuelType);

    if(pTrailer===undefined){
        console.log(`El camion ${pBrand} ${pModel} no tiene acoplado`);
        } else {
        this.trailer=pTrailer;
    }
}
    public getTrailerType():string{
        return this.trailer;
    }
    public setTrailerType(newTrailer:string):void{
        this.trailer=newTrailer;
    }
}   
    let truck1=new Truck('Volvo','Genesis',2016,'Gris','AA323XV','Euro');
    console.log(truck1);
    