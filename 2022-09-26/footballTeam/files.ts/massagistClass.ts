import { Footballer,footballPlayers } from './footballerClass';
import { Person } from "./personClass";
export class Massagist extends Person{
    private specialty:string;
    private footballPlayers:Footballer[];
    public constructor(pName:string,pSurname:string,pAge:number,pGender:string,pHeight:number,pSpecialty:string,pFootballer:Footballer[]){
        super(pName,pSurname,pAge,pGender,pHeight);
        this.specialty=pSpecialty;
        this.footballPlayers=pFootballer;
    }
    public getSpecialty():string{
        return `La especialidad del masajista ${this.getSurname()} es ${this.specialty}`;
    }
    public setSpecialty(newSpecialty:string):void{
        this.specialty=newSpecialty
    }
    public massage(player:Footballer):void{
        for(let i:number=0;i<footballPlayers.length;i++){
            if(player==this.footballPlayers[i]){
        console.log(`Se realizó un masaje al jugador ${player.getSurname()} ${player.getName()}`);
        break;
    }
}
}
}
export let massagist1:Massagist=new Massagist('Pedro','Benitez',40,'Hombre',1.65,'Masajes descontracturantes',footballPlayers);
