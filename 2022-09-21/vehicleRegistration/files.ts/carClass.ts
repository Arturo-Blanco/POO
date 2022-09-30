import { Vehicle } from './automotiveClass';

export class Car extends Vehicle {
    private trunkSize:string;

    public constructor(pBrand:string,pModel:string,pYear:number,pColour:string,pPatent:string,pFuelType:string,pTrunkSize:string,pEngine?:boolean){
    super(pBrand,pModel,pYear,pColour,pPatent,pFuelType,pEngine);
    this.trunkSize=pTrunkSize;
    }
    public getTrunkSize():string{
        return `La capacidad del tanque es de ${this.trunkSize} litros`;
    }
    public setTrunkSize(newSize:string):void{
        this.trunkSize=newSize;
    }
}
let car1:Car=new Car('Volkswagen','Gol',2018,'Rojo','AC391TY','Nafta','480l');
let car2:Car=new Car('Toyota','Hilux',2016,'Negro','AA423OP','Gasoil','10050l');
let car3:Car=new Car('Fiat','Palio',2019,'Blanco','AD153CV','Nafta','480l');
let car4=new Car('Chevrolet','Tracker',2022,'Rojo','AF323ME','Gasoil','850l')

