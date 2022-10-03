import { Person } from "./personClass";

export class Footballer extends Person{
    private gamePosition:string;
    private shirtNumber:number;
    private headline:boolean;

    public constructor(pName:string,pSurname:string,pAge:number,pGender:string,pHeight:number,pGamePosition:string,pShirtNumber:number,pHeadline:boolean){
        super(pName,pSurname,pAge,pGender,pHeight);
        this.gamePosition=pGamePosition;
        this.shirtNumber=pShirtNumber;
        this.headline=pHeadline;
    }
    public getGamePosition():string{
        return `El jugador ${this.getSurname()} juega en la posicion ${this.gamePosition}`;
    }
    public getShirtNumber():any{
        return `El jugador ${this.getSurname()} usa la camiseta numero ${this.shirtNumber}`;
    }
    public getState():any{
        if(this.headline==true){
            console.log(`El jugador ${this.surname} ${this.name} es titular`);
        } else {
            console.log(`El jugador ${this.surname} ${this.name} es suplente`);
        }
    }
    public setGamePosition(newPosition:string):void{
        this.gamePosition=newPosition;
    }
    public setShirtNumber(newNumber:number):void{
        this.shirtNumber=newNumber;
    }
    public setState(newState:boolean):void{
        this.headline=newState;
    }
}
