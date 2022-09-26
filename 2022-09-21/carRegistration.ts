import { Car } from "./carObjet";
class carRegistered{
    private registerName:string;
    private registeredCars:Car[];

    constructor(pRegisterName:string,pRegisteredCar:Car[]){
        this.registerName=pRegisterName;
        this.registeredCars=pRegisteredCar;
    }
    
}