"use strict";
exports.__esModule = true;
var library_1 = require("./files.ts/library");
var bookClass_1 = require("./files.ts/bookClass");
var magazineClass_1 = require("./files.ts/magazineClass");
var clientClass_1 = require("./files.ts/clientClass");
/*Se crean objetos libros*/
var book1 = new bookClass_1.Book('Campanita', 50, 'Pedro', 200, 'Este libro habla sobre la historia de un hada..', 'Fantasia');
var book2 = new bookClass_1.Book('Iron man', 150, 'Juan', 300, 'Este libro trata de un multimillonario que se hace superheroe..', 'Ciencia Ficcion');
var book3 = new bookClass_1.Book('Robin Hood', 200, 'Miguel', 500, 'Este libro habla sobre un arquero samaritano..', 'Clasico');
var book4 = new bookClass_1.Book('Harry Potter', 500, 'Ana', 2000, 'Este libro habla sobre un mago y un colegio de magos..', 'Magia');
/*Se crean objetos revistas*/
var magazine1 = new magazineClass_1.Magazine('Para ti', 20, 'Rosa', 20, 5, 2022);
var magazine2 = new magazineClass_1.Magazine('Oeste', 15, 'Araceli', 12, 4, 2021);
var magazine3 = new magazineClass_1.Magazine('People', 40, 'Tifanny', 120, 4, 1950);
var magazine4 = new magazineClass_1.Magazine('Rolling Stones', 30, 'Stones', 200, 4, 1900);
/*Se crean objetos clientes*/
var client1 = new clientClass_1.Client('Juan', 'Perez', 38754826, 'Velez Sarfield', 0.3);
var client2 = new clientClass_1.Client('Hernan', 'Rodriguez', 58746216, 'Nuñez', 0);
var client3 = new clientClass_1.Client('Arturo', 'Lencina', 37492392, 'San Martin 372', 0.5);
/*Se crean listas de objetos*/
var clientlist = [client1, client2, client3];
var bookList = [book1, book2, book3, book4];
var magazineList = [magazine1, magazine2, magazine3, magazine4];
/*Se crean objeto libreria y se asigna las listas de clientes, libros y revistas*/
var newLibrary = new library_1.Library(clientlist, bookList, magazineList);
newLibrary.soldArticle(client1, magazine1); /*Libreria vende articulo a client1*/
newLibrary.soldArticle(client3, book1); /*Libreria vende articulo a client3*/
newLibrary.soldArticle(client2, magazine3); /*Libreria vende articulo a client2*/
console.log(client1);
client1.addFavoriteAuthor('Pepe'); /*Se agrega autor favorito a client1*/
console.log(client1); /*Se verifica que se haya agregado autor*/
newLibrary.getClient(client1);
var consulta = newLibrary.getClient(client1);
console.log(consulta);
