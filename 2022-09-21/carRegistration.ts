import { Truck } from './truckObjet';
import { Car } from "./carObjet";
import { Bicycle } from './bicycleObjet';
class carRegistered{
    private registerName:string;
    private registeredCars:Car[];
    private registeredTruck:Truck[];
    private registeredBycicle:Bicycle[];

    constructor(pRegisterName:string,pRegisteredCar:Car[],pRegisteredTruck:Truck[],pRegisteredBycicle:Bicycle[]){
        this.registerName=pRegisterName;
        this.registeredCars=pRegisteredCar;
        this.registeredTruck=pRegisteredTruck;
        this.registeredBycicle=pRegisteredBycicle;
    }
    
}
