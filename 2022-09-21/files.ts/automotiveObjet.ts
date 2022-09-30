export class Vehicle {
    protected brand:string;
    protected model:string;
    protected year:number;
    protected colour:string;
    protected vehiclePatent:string;
    protected fuelType:string;
    protected wheelNumbers:number;
    protected engine:boolean;

    protected constructor(pBrand:string,pModel:string,pYear:number,pColour:string,pPatent:string,pFuelType:string,pEngine?:boolean){
        this.brand=pBrand;
        this.model=pModel;
        this.year=pYear;
        this.colour=pColour;
        this.vehiclePatent=pPatent;
        this.fuelType=pFuelType; 

        if(pEngine==true){
        console.log('El vehiculo tiene motor');
        } else {
        console.log('El vehiculo no tiene motor');
        }
    }
    protected getBrand():string{
        return this.brand;
    }
    protected getModel():string{
        return this.model;
    }
    protected getYear():number{
            return this.year;
    }
    protected getColour():string {
            return this.colour;
    }
    protected getFuelType():string{ 
        return this.fuelType;
    }
    protected getVehiclePatent():string{
        return this.vehiclePatent;
    }
    protected setBrand(newBrand:string):void{
        this.brand=newBrand;
    }
    protected setModel(newModel:string):void{
        this.model=newModel;
    }
    protected setYear(newYear:number):void{
        this.year=newYear;
    }
    protected setColour(newColour:string):void{
        this.colour=newColour;
    }
    protected setFuelType(newFuelType:string):void{ 
        this.fuelType=newFuelType;
    }
    protected setVehiclePatent(newPatent:string):void{
        this.vehiclePatent=newPatent;
    }
}

