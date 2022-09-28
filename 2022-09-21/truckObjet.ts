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
    let truck2=new Truck('Mercedez Benz','Actros',2020,'Rojo','AE753TC','Euro');
    let truck3=new Truck('Iveco','Daily',2018,'Azul','AB845UN','Euro');
    let registeredTruck:Truck[]=[truck1,truck2,truck3];
    