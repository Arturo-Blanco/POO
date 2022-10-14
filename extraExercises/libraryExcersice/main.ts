import { Library } from './files.ts/library';
import { Book } from './files.ts/bookClass';
import { Magazine } from './files.ts/magazineClass';
import { Client } from './files.ts/clientClass';

let authors=['Pedro','Rosa','Juan','Araceli'];
let genres=['Drama','Terror','Comedia','Vaqueros'];
let client1:Client=new Client('Juan','Perez',38754826,'Velez Sarfield',authors,genres,0.1);
let client2:Client=new Client('Hernan','Rodriguez',58746216,'Nuñez',authors,genres,0.3);

let book1:Book=new Book('Campanita',50,'Pedro',200,'Este libro habla sobre la historia de un hada..','Fantasia');
let book2:Book=new Book('Iron man',150,'Juan',300,'Este libro trata de un multimillonario que se hace superheroe','Drama');
let magazine1:Magazine=new Magazine('Para ti',20,'Rosa',20,5,2022);
let magazine2:Magazine=new Magazine('Oeste',15,'Araceli',12,4,2021);

let clientlist:Client[]=[client1,client2];
let bookList:Book[]=[book1,book2];
let magazineList:Magazine[]=[magazine1,magazine2];

let newLibrary:Library=new Library(clientlist,bookList,magazineList);
