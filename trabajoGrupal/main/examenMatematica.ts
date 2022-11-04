import { Pregunta } from "../files.ts/pregunta";
import { Examen } from "../files.ts/examen";

let opcPreg1=['2','3','4','5'];
let opcPreg2=['6','8','12','15'];
let opcPreg3=['100','200','300','400'];
let opcPreg4=['64','No se puede saber','127','129'];

let pregunta1:Pregunta=new Pregunta('Cuanto es 2+2',opcPreg1,3,2);
let pregunta2:Pregunta=new Pregunta('Cuanto es 4*3',opcPreg2,3,2);
let pregunta3:Pregunta=new Pregunta('Cuanto es 100 + 100',opcPreg3,2,2);
let pregunta4:Pregunta=new Pregunta('En un torneo de tenis, el jugador que pierde se vuelve a casa. Cuántos jugadores iniciaron este torneo si desde la ronda preliminar hasta la final se han jugado 128 partidos.',opcPreg4,4,4);

let preguntasMatematicas:Pregunta[]=[pregunta1,pregunta2,pregunta3,pregunta4];

export let examenMatematica:Examen=new Examen(preguntasMatematicas,'Matematicas',6);


