import { Footballer } from './footballerClass';
import { Person } from "./personClass";
export class Massagist extends Person{
    private specialty:string;
    private squadPlayers:Footballer[];
    public constructor(pName:string,pSurname:string,pAge:number,pGender:string,pHeight:number,pSpecialty:string){
        super(pName,pSurname,pAge,pGender,pHeight);
        this.specialty=pSpecialty;
    }
    public getSpecialty():string{
        return `La especialidad del masajista ${this.getSurname()} es ${this.specialty}`;
    }
    public setSpecialty(newSpecialty:string):void{
        this.specialty=newSpecialty
    }
    public massage(player:Footballer):void{
        for(let i:number=0;i<this.squadPlayers.length;i++){
            if(player===this.squadPlayers[i]){
        console.log(`Se realizó un masaje al jugador ${this.squadPlayers[i].getSurname()} ${this.squadPlayers[i].getName()}`);
        break;
            }
        }
    }
}

