import { Alumno } from './../files.ts/alumno';
import { examenLengua } from './examenLengua';
import { RendicionDeExamen } from "../files.ts/rendicionExamen";
import { examenMatematica } from "./examenMatematica";

let respuestasExamenLengua=[];
let respuestasExamenMatematica=[];

let rendicionExamenMatematica:RendicionDeExamen=new RendicionDeExamen(examenMatematica,respuestasExamenMatematica);

let rendicionExamenLengua:RendicionDeExamen=new RendicionDeExamen(examenLengua,respuestasExamenLengua);

let examenesRendidos:RendicionDeExamen[]=[rendicionExamenMatematica,rendicionExamenLengua];

let alumno1:Alumno=new Alumno(examenesRendidos,'Hernan',37232712);

let respuestasLengua=[3,3,2,1];
let respuestasMatematica=[3,3,2,2];

alumno1.rendirExamen(examenLengua,respuestasLengua);
alumno1.rendirExamen(examenMatematica,respuestasMatematica);

rendicionExamenLengua.estaAprobado();
rendicionExamenMatematica.estaAprobado();