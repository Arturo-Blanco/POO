import { Pregunta } from "./pregunta";

export class Examen {
    protected preguntas: Pregunta[];
    protected tema: string;
    protected puntajeAprobacion: number;

    constructor(pPreguntas: Pregunta[], pTema: string, pPuntaje: number) {
        this.preguntas = pPreguntas;
        this.tema = pTema;
        this.puntajeAprobacion = pPuntaje;
    }

    public examen(tema: string, puntajeAprobacion: number): any {
        console.log(`El tema ${tema} se aprueba con ${puntajeAprobacion}`);
    }

    public addPregunta(pregunta: Pregunta): void {
        this.preguntas.push(pregunta);
    }

    public equals(o: Object): boolean {
        let encontrado = false;
        for (let i: number = 0; i < this.preguntas.length; i++) {
            if (o[i] === this.preguntas[i]) {
            encontrado = true;
            }
        }
        if (encontrado === true) {
            return true;
        } else {
            return false;
        }
    }

    public getTema(): string {
        return this.tema;
    }
}