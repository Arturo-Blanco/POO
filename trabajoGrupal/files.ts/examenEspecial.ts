import { Examen } from "./examen";
import { Pregunta } from "./pregunta"

export class ExamenEspecial extends Examen {
    private penalizacionRepuestaIncorrecta:number;

    constructor(pPreguntas:Pregunta[],pTema:string,pPuntaje:number,pPenalizacion:number){
        super(pPreguntas,pTema,pPuntaje);
        this.penalizacionRepuestaIncorrecta=pPenalizacion
    }

    public examenEspecial(tema:string,puntajeAprobacion:number, penalizacion:number):void{
        console.log(`El tema es ${tema}, el puntaje de aprobacion es ${puntajeAprobacion} y la penalizacion es ${penalizacion}.`);
    }

    public addPregunta(pregunta:Pregunta):void{
        this.preguntas.push(pregunta);
    }

    public getPenalizacionRespuestaIncorrecta():number{
        return this.penalizacionRepuestaIncorrecta;
    }
} 