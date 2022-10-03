import { Footballer } from './footballerClass';
import { Person } from "./personClass";
export class TechnicalDirector extends Person {
    private firstTeam:boolean;
    private footballPlayers:Footballer[];

    public constructor(pName:string,pSurname:string,pAge:number,pGender:string,pHeight:number,pFirstTeam:boolean){
        super(pName,pSurname,pAge,pGender,pHeight);
        this.firstTeam=pFirstTeam;
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
    public changePlayer(player:Footballer):void{
        for(let i:number=0;i<this.footballPlayers.length;i++){
        if(player==this.footballPlayers[i] && player.getState()==true){
            player.setState(false)
            console.log(`El jugador ${player.getName()} va a la banca`);
        } else {
            player.setState(true)
            console.log(`El jugador ${player.getName()} es titular`);
            }
        }
    }
}
