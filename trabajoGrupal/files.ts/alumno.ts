import { RendicionDeExamen } from "./rendicionExamen";
import { Examen } from "./examen";

export class Alumno {
    private examenesRendidos:RendicionDeExamen[];
    private nombre:string;
    private dni:number;

    constructor(pExamenesRendidos:RendicionDeExamen[],pNombre:string,pDni:number){
        this.examenesRendidos=pExamenesRendidos;
        this.nombre=pNombre;
        this.dni=pDni;
    }
    public alumno(nombre:string,dni:number):void{
        this.nombre=nombre;
        this.dni=dni;
    }
    public getNombre():string{
        return this.nombre;
    }
    public getDni():number{
        return this.dni;
    }
    public rendirExamen(examen:Examen,respuestas:number[]):boolean{
        let aux=false;
        for(let i:number=0;i<this.examenesRendidos.length;i++){
            if(examen==this.examenesRendidos[i].getExamen()){
                this.examenesRendidos[i].rendicionDeExamen(examen,respuestas);
            aux=true;
            }
        } if(aux==true){
            console.log(`El alumno ${this.nombre} acaba de rendir el examen de ${examen.getTema()}.`);
            return true;
        } else {
            console.log(`El alumno ${this.nombre} ya rindio el examen de ${examen.getTema()}.`);
            return false;
        }
    }
}