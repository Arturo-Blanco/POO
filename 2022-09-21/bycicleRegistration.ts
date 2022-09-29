import { Bicycle } from './bicycleObjet';
import { vehicleRegistered } from './vehicleRegistration';

class bycicleRegistration extends vehicleRegistered{
    private registeredBycicle:Bicycle[];

    public constructor(pRegisterName:string,pLocation:string,registeredBycicle:Bicycle[]){
        super(pRegisterName,pLocation);
        this.registeredBycicle=registeredBycicle;
    }
}