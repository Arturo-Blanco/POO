import { RendicionDeExamen } from "./rendicionExamen";
import { Examen } from "./examen";

export class Alumno {
    private examenesRendidos: RendicionDeExamen[];
    private nombre: string;
    private dni: number;

    constructor(pExamenesRendidos: RendicionDeExamen[], pNombre: string, pDni: number) {
        this.examenesRendidos = pExamenesRendidos;
        this.nombre = pNombre;
        this.dni = pDni;
    }
    public alumno(nombre: string, dni: number): void {
        this.nombre = nombre;
        this.dni = dni;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getDni(): number {
        return this.dni;
    }
    public rendirExamen(examen: Examen, respuestas: number[]): boolean {
        let aux=0;
        for(let i:number=0;i<this.examenesRendidos.length;i++){
            if(this.examenesRendidos[i].getExamen()===examen){
                if(respuestas[i]===RendicionDeExamen.)
        }
        if(aux===1){
        return true
        }   else {
        return false
            }
        }
    }
}