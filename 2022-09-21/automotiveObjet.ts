export class Vehicle {
    protected brand:string;
    protected model:string;
    protected year:number;
    protected colour:string;
    protected vehiclePatent:string;
    protected fuelType:string;
    protected wheelNumbers:number;
    protected engine:boolean;

    public constructor(pBrand:string,pModel:string,pYear:number,pColour:string,pPatent:string,pFuelType:string,pEngine?:boolean){
        this.brand=pBrand;
        this.model=pModel;
        this.year=pYear;
        this.colour=pColour;
        this.vehiclePatent=pPatent;
        this.fuelType=pFuelType; 

        if(pEngine==undefined){
        console.log('El vehiculo tiene motor');
        } else {
        console.log('El vehiculo no tiene motor');
        }
    }
    public getBrand():string{
        return this.brand;
        }
    public getModel():string{
        return this.model;
            }
    public getYear():number{
            return this.year;
        }
    public getColour():string {
            return this.colour;
        }
    public getFuelType():string{ 
        return this.fuelType;
        }
    public getVehiclePatent():string{
        return this.vehiclePatent;
        }
    }

