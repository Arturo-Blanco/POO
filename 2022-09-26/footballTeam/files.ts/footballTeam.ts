import { TechnicalDirector} from './dtClass';
import { Footballer} from './footballerClass';
import { Massagist} from './massagistClass';
export class FootballTeam {
    private nameTeam:string;
    private technicalDirector:TechnicalDirector;
    private footballPlayers:Footballer[];
    private massagist:Massagist;

    public constructor(pNameTeam:string,pTechnicalDirector:TechnicalDirector,pFootballPlayers:Footballer[],pMassagist:Massagist){
        this.nameTeam=pNameTeam;
        this.technicalDirector=pTechnicalDirector;
        this.footballPlayers=pFootballPlayers;
        this.massagist=pMassagist;
    }
    public getNameTeam():string{
        return this.nameTeam;
    }
    public setNameTeam(newName:string):void{
        this.nameTeam=newName;
    }
    public hireTechnicalDirector(newTechnicalDirector:TechnicalDirector):void{
        console.log(`Se ha contratado al director tecnico ${newTechnicalDirector.getName()}`);
    }
    public buyPlayer(newPlayer:Footballer):void{
        this.footballPlayers.push(newPlayer);
        console.log(`El equipo ${this.nameTeam} compró al jugador ${newPlayer.getName()}`);
    }
    public hireMassagist(newMassagist:Massagist):void{
        console.log(`Se ha contratado al director tecnico ${newMassagist.getName()}`);
    }
    public fireTechnicalDirector(technicalDirector:TechnicalDirector):void{
        console.log(`Se despidio al entrenador ${technicalDirector.getName()}`);
    }
    public sellPlayer(player:Footballer):void{
        for(let i:number=0;i<this.footballPlayers.length;i++){
            if(player==this.footballPlayers[i]){
            this.footballPlayers.splice(i,1)
            }
        } console.log(`Se vendio al jugador ${player.getSurname()} ${player.getName()}`);
    }
    public fireMassagist(massagist:Massagist):void{
        console.log(`Se despidio al masajista ${massagist.getName()}`);
    }
}

