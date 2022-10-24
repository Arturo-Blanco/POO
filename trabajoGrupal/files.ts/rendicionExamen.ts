import { Alumno } from './alumno';
import { Examen } from "./examen";

export class RendicionDeExamen {
    private examen:Examen;
    private respuestas:number[];
    
    public constructor(pExamen:Examen,pRespuestas:number[]){
        this.examen=pExamen;
        this.respuestas=pRespuestas;
    }
    public rendicionDeExamen(examen:Examen,respuestas:number[]):void{ 
        if(examen==this.examen){
            for (let i:number= 0;i<respuestas.length;i++) {
                this.respuestas.push(respuestas[i]);
            }
        }
    }
    public getExamen():Examen{
        return this.examen;
    }
    public estaAprobado():boolean{
            if(this.examen.equals(this.respuestas)===true){
                console.log(`El alumno aprobo el examen de ${this.examen.getTema()}.`);
                return true;
            }else{
                console.log(`El alumno desaprobo el examen de ${this.examen.getTema()}.`);
                return false;
            }
        }
    }