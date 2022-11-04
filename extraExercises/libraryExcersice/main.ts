import { Library } from './files.ts/library';
import { Book } from './files.ts/bookClass';
import { Magazine } from './files.ts/magazineClass';
import { Client } from './files.ts/clientClass';
/*Se crean objetos libros*/
let book1:Book=new Book('Campanita',50,'Pedro',200,'Este libro habla sobre la historia de un hada..','Fantasia');
let book2:Book=new Book('Iron man',150,'Juan',300,'Este libro trata de un multimillonario que se hace superheroe..','Ciencia Ficcion');
let book3:Book=new Book('Robin Hood',200,'Miguel',500,'Este libro habla sobre un arquero samaritano..','Clasico');
let book4:Book=new Book('Harry Potter',500,'Ana',2000,'Este libro habla sobre un mago y un colegio de magos..','Magia');
/*Se crean objetos revistas*/
let magazine1:Magazine=new Magazine('Para ti',20,'Rosa',20,5,2022);
let magazine2:Magazine=new Magazine('Oeste',15,'Araceli',12,4,2021);
let magazine3:Magazine=new Magazine('People',40,'Tifanny',120,4,1950);
let magazine4:Magazine=new Magazine('Rolling Stones',30,'Stones',200,4,1900);
/*Se crean objetos clientes*/
let client1:Client=new Client('Juan','Perez',38754826,'Velez Sarfield',0.3);
let client2:Client=new Client('Hernan','Rodriguez',58746216,'Nuñez',0);
let client3:Client=new Client('Arturo','Lencina',37492392,'San Martin 372',0.5);
/*Se crean listas de objetos*/
let clientlist:Client[]=[client1,client2,client3];
let bookList:Book[]=[book1,book2,book3,book4];
let magazineList:Magazine[]=[magazine1,magazine2,magazine3,magazine4];
/*Se crean objeto libreria y se asigna las listas de clientes, libros y revistas*/
let newLibrary:Library=new Library(clientlist,bookList,magazineList);

newLibrary.soldArticle(client1,magazine1);/*Libreria vende articulo a client1*/
newLibrary.soldArticle(client3,book1);/*Libreria vende articulo a client3*/
newLibrary.soldArticle(client2,magazine3);/*Libreria vende articulo a client2*/
console.log(client1);
client1.addFavoriteAuthor('Pepe');/*Se agrega autor favorito a client1*/
console.log(client1); /*Se verifica que se haya agregado autor*/
newLibrary.getClient(client1)

let consulta=newLibrary.getClient(client1)
console.log(consulta);

