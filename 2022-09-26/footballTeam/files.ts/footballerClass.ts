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
        return `El jugador ${this.getSurname()} juega en la pisicion ${this.gamePosition}`;
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
let footballer1:Footballer=new Footballer('Hernan','Rodriguez',27,'Hombre',1.78,'Arquero',1,true);
let footballer2:Footballer=new Footballer('Miguel','Alcaraz',30,'Hombre',1.72,'Defensor',5,true);
let footballer3:Footballer=new Footballer('Leo','Blanco',28,'Hombre',1.75,'Defensor',4,false);
let footballer4:Footballer=new Footballer('Martin','Cantos',24,'Hombre',1.75,'Defensor',3,true);
let footballer5:Footballer=new Footballer('Ivan','Acosta',22,'Hombre',1.76,'Defensor',12,true);
let footballer6:Footballer=new Footballer('Franco','Gutierrez',25,'Hombre',1.70,'Mediocentro',7,false);
let footballer7:Footballer=new Footballer('Luis','Hernandez',26,'Hombre',1.68,'Lateral Izquierdo',6,false);
let footballer8:Footballer=new Footballer('Nicolas','Cortez',32,'Hombre',1.72,'Lateral derecho',8,true);
let footballer9:Footballer=new Footballer('Sebastian','Messi',28,'Hombre',1.70,'Delantero',10,false);
let footballer10:Footballer=new Footballer('Cristian','Fernandez',25,'Hombre',1.72,'Delantero',17,true);
let footballer11:Footballer=new Footballer('Fabio','Perez',32,'Hombre',1.68,'Delantero',15,true);

export let footballPlayers:Footballer[]=[footballer1,footballer2,footballer3,footballer4,footballer5,footballer6,footballer6,footballer7,footballer8,footballer9,footballer10,footballer11];