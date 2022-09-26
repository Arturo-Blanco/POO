class Car {
    private swichetOn:boolean;
    private brand:string;
    private model:string;
    private year:number;
    private colour:string;
    private vehicle:string;
    private fuelType:string;
    private vehiclePatent:string;

    constructor(pVehicle:string,pBrand:string,pModel:string,pColour:string,pYear:number,pTatent,pFuelType?:string){
        this.vehicle=pVehicle;
        this.brand=pBrand;
        this.model=pModel;
        this.colour=pColour;
        this.year=pYear;
        this.vehiclePatent=pTatent;
    if(pFuelType!==undefined) {
        this.fuelType==pFuelType;
        }
    }
    public swichetOnOff():void{
    if(this.swichetOn===true){
        this.swichetOn=false;
    }else{
        this.swichetOn=true;
    }
}
    public getVehicle(): string {
    return this.brand+ ' ' +this.model;
    }
    public getYear():number{
        return this.year;
    }
    public getColour():string {
        return this.colour;
    }
    public getVehicleType():string {
        return this.vehicle;
    }
    public getFuelType():string{ 
    return this.fuelType;
    }
    public getVehiclePatent():string{
    return this.vehiclePatent;
    }
}
let car1=new Car('Auto','Volkswagen','Gol','Azul',2018,'AC391TY','Nafta');
let car2=new Car('Camioneta','Toyota','Hilux','Negro',2016,'AA423OP','Gasoil');
let car3=new Car('Auto','Fiat','Palio','Blanco',2019,'AD153CV','Nafta');
let car4=new Car('SUV','Chevrolet','Tracker','Rojo',2022,'AF323ME','Gasoil');
let registeredCars:Car[]=[car1,car2,car3,car4];

export {Car};