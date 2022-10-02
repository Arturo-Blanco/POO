import { Footballer,footballPlayers } from './footballerClass';
import { Person } from "./personClass";
export class Massagist extends Person{
    private specialty:string;

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
        console.log(`Se realizó un masaje al jugador ${player.getName()}`);
    }
}
export let massagist1:Massagist=new Massagist('Pedro','Benitez',40,'Hombre',1.65,'Masajes descontracturantes');
