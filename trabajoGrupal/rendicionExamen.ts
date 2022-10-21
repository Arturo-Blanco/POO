import { Alumno } from './alumno';
import { Examen } from "./examen";
export class RendicionDeExamen {
    private examen:Examen;
    private respuestas:number[];
    
    public constructor() {
    }
    public rendicionDeExamen(examen:Examen,respuestas:number[]):void{ 
        this.examen=examen;
            for (let i:number= 0;i< respuestas.length;i++) {
            this.respuestas.push(respuestas[i]);
            }
        }
    public getExamen():Examen{
        return this.examen;
    }
    public estaAprobado():boolean{
        Alumno.
    }
}