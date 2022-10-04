import { Footballer } from './footballerClass';
import { Person } from "./personClass";
export class TechnicalDirector extends Person {
    private firstTeam:boolean;
    private footballPlayers:Footballer[];

    public constructor(pName:string,pSurname:string,pAge:number,pGender:string,pHeight:number,pFirstTeam:boolean,pFootball:Footballer[]){
        super(pName,pSurname,pAge,pGender,pHeight);
        this.firstTeam=pFirstTeam;
        this.footballPlayers=pFootball;
    }
    public getFirstTeam():any{
        if(this.firstTeam==true){
            console.log(`Es el primer equipo que dirige ${this.getSurname()} ${this.getName()}`);
        } else {
            console.log(`No es el primer equipo que dirige ${this.getSurname()} ${this.getName()}`);
        }
    }
    public setFirstTeam(newState:boolean):void{
        this.firstTeam=newState;
    }
    public changePlayer(player:Footballer):any{
        for(let i:number=0;i<this.footballPlayers.length;i++){
        if(player==this.footballPlayers[i] && player.getState()==true){
            player.setState(false)
            return `El jugador ${player.getName()} va a la banca`
        } else {
            player.setState(true)
            return `El jugador ${player.getName()} es titular`;
            }
        }
    }
}
