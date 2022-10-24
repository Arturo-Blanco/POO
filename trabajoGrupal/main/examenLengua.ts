import { Pregunta } from "../files.ts/pregunta";
import { Examen } from "../files.ts/examen";

let opcPreg1=['Coche','Fajin','Cantaro','Mesa'];
let opcPreg2=['Ágil','Álto','Mésa','Alégran'];
let opcPreg3=['ca-í-a','ha-bi-ta-ci-ón','sae-ta','a-i-re'];
let opcPreg4=['ca','mi','se','ta'];

let pregunta1:Pregunta=new Pregunta('Una de las siguientes palabras es aguda:',opcPreg1,2,2);
let pregunta2:Pregunta=new Pregunta('Sólo una de estas palabras está escrita correctamente:',opcPreg2,1,2);
let pregunta3:Pregunta=new Pregunta('Sólo una de estas palabras está bien separada silábicamente',opcPreg3,1,2);
let pregunta4:Pregunta=new Pregunta('Señala la sílaba tónica de la palabra “camiseta”',opcPreg4,3,4);

let preguntasLengua:Pregunta[]=[pregunta1,pregunta2,pregunta3,pregunta4];

export let examenLengua:Examen=new Examen(preguntasLengua,'Lengua',6);

