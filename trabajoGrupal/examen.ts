import { RendicionDeExamen } from './rendicionExamen';
import { Alumno } from "./alumno";
import { Pregunta } from "./pregunta";

export class Examen {
    protected preguntas:Pregunta[];
    protected tema:string;
    protected puntajeAprobacion:number;

    constructor(pPreguntas:Pregunta[],pTema:string,pPuntajeAprobacion:number){
        this.preguntas=pPreguntas;
        this.tema=pTema;
        this.puntajeAprobacion=pPuntajeAprobacion;
    }
    public examen(tema:string,puntajeAprobacion:number):void{
        console.log(`El tema ${tema} se aprueba con ${puntajeAprobacion}`);
    }
    public addPregunta(pregunta:Pregunta):void{
        this.preguntas.push(pregunta);
    }
    public equals(o:Object):boolean{
        let aux=0;
        for(let i:number=0;i<this.preguntas.length;i++){
            if(o[i]===this.preguntas[i].esCorrecta(o[i])){  
                aux=aux+this.preguntas[i].getPuntaje();
            }
        }if(aux>=this.puntajeAprobacion){
            return true;
        } else {
            return false;
        }
    }
    public getTema():string{
        return this.tema;
    }
}