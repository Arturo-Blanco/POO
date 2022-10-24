import { Pregunta } from "./pregunta";
import { Examen } from "./examen";
import { Alumno } from "./alumno";
import { RendicionDeExamen } from "./rendicionExamen";

let opcPreg1=['2','3','4','5'];
let opcPreg2=['6','8','12','15'];
let opcPreg3=['100','200','300','400'];

let pregunta1:Pregunta=new Pregunta('Cuanto es 2+2',opcPreg1,3,2);
let pregunta2:Pregunta=new Pregunta('Cuanto es 4*3',opcPreg2,3,2);
let pregunta3:Pregunta=new Pregunta('Cuanto es 100 + 100',opcPreg3,2,2);
let preguntas:Pregunta[]=[pregunta1,pregunta2,pregunta3];

let examen1:Examen=new Examen(preguntas,'Matematicas',6);
let respuestasExamen=[3,3,2];
let rendicionExamen:RendicionDeExamen=new RendicionDeExamen(examen1,respuestasExamen);

rendicionExamen.estaAprobado()