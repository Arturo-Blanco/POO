export class vehicleRegistered{
    protected registerName:string;
    protected location:string;

    protected constructor(pRegisterName:string,pLocation:string){
        this.registerName=pRegisterName;
        this.location=pLocation;
    }
    protected getRegisterName():string{
        return this.registerName;
    }
    protected setRegisterName(newRegisterName:string):void{
    this.registerName=newRegisterName;
    }
    protected getRegisterLocation():string{
        return this.location;
    }
    protected setRegisterLocation(newLocation:string):void{
        this.location=newLocation;
    }
}
