import { Word } from "./files.ts/wordClass";
import { Dictionary } from "./files.ts/dictionaryClass";

let houseSynonym=['Hogar','vivienda','Sucucho'];
let houseAntonys=['Pocilga','Rancho'];
let caeSynonym=['Carro','Vehiculo'];
let carAntonyms=['Avion'];

let casa=new Word('Lugar para vivir','Sustantivo',houseSynonym,houseAntonys);
let auto=new Word('Vehiculo para transporte','Sustantivo',caeSynonym,carAntonyms);
let words:Word[]=[casa,auto]
let newDictionary:Dictionary=new Dictionary(words);

console.log(newDictionary);

