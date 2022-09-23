"use strict";
exports.__esModule = true;
/*se importa npm para leer archivos del sistema*/
var fs = require("fs");
var Book = /** @class */ (function () {
    function Book(pBookName, pBookAuthor, pBookType, pBookYear) {
        this.bookName = pBookName;
        this.bookType = pBookType;
        this.bookAuthor = pBookAuthor;
        this.bookYear = pBookYear;
    }
    Book.prototype.getBookName = function () {
        return this.bookName;
    };
    Book.prototype.getBookAuthor = function () {
        return this.bookAuthor;
    };
    Book.prototype.getBookType = function () {
        return this.bookType;
    };
    Book.prototype.getBookYear = function () {
        return this.bookYear;
    };
    Book.prototype.setBookName = function (pName) {
        this.bookName = pName;
    };
    Book.prototype.setBookAuthor = function (pAuthor) {
        this.bookAuthor = pAuthor;
    };
    Book.prototype.setBookType = function (pType) {
        this.bookType = pType;
    };
    Book.prototype.setBookYear = function (pYear) {
        this.bookYear = pYear;
    };
    return Book;
}());
var BookManager = /** @class */ (function () {
    function BookManager(pManagerBook, pBookList) {
        this.managerName = pManagerBook;
        this.bookList = pBookList;
    }
    BookManager.prototype.getManagerName = function () {
        return this.managerName;
    };
    BookManager.prototype.setManagerName = function (newManagerName) {
        this.managerName = newManagerName;
    };
    /*funcion para insertar un nuevo libro */
    BookManager.prototype.insertNewBook = function (pBook) {
        this.bookList.push(pBook);
        console.log("Se ah a\u00F1adido el libro ".concat(pBook.getBookName(), ", del autor ").concat(pBook.getBookAuthor(), "."));
    };
    /*funcion para consultar por un libro*/
    BookManager.prototype.consultBook = function (pBook) {
        for (var i = 0; i < this.bookList.length; i++) {
            if (pBook.getBookName() === this.bookList[i].getBookName()) {
            }
        }
        console.log("El libro se llama ".concat(pBook.getBookName(), ", escrito por ").concat(pBook.getBookAuthor(), ", del g\u00E9nero ").concat(pBook.getBookType(), ", publicado el a\u00F1o ").concat(pBook.getBookYear(), "."));
    };
    /*funcion para modificar el nombre de un libro*/
    BookManager.prototype.modifyName = function (pBook, pNewName) {
        for (var i = 0; i < this.bookList.length; i++) {
            if (pBook == this.bookList[i] && this.bookList[i].getBookName() != pNewName) {
                this.bookList[i].setBookName(pNewName);
            }
        }
    };
    /*funcion para modificar el tipo de un libro*/
    BookManager.prototype.modifyType = function (pBook, pNewType) {
        for (var i = 0; i < this.bookList.length; i++) {
            if (pBook == this.bookList[i] && this.bookList[i].getBookType() != pNewType) {
                this.bookList[i].setBookType(pNewType);
            }
        }
    };
    /*funcion para modificar el autor de un libro*/
    BookManager.prototype.modifyAuthor = function (pBook, pNewAuthor) {
        for (var i = 0; i < this.bookList.length; i++) {
            if (pBook == this.bookList[i] && this.bookList[i].getBookAuthor() != pNewAuthor) {
                this.bookList[i].setBookAuthor(pNewAuthor);
            }
        }
    };
    /*funcion para modificar el año de publicacion de un libro*/
    BookManager.prototype.modifyYear = function (pBook, pNewYear) {
        for (var i = 0; i < this.bookList.length; i++) {
            if (pBook == this.bookList[i] && this.bookList[i].getBookYear() != pNewYear) {
                this.bookList[i].setBookYear(pNewYear);
            }
        }
    };
    /*funcion para eliminar un libro*/
    BookManager.prototype.deleteBook = function (pBook) {
        for (var i = 0; i < this.bookList.length; i++) {
            if (pBook == this.bookList[i]) {
                this.bookList.splice(i, 1);
            }
        }
        console.log("Se ha eliminado el libro ".concat(pBook.getBookName(), ", del autor ").concat(pBook.getBookAuthor(), "."));
    };
    /*funcion para leer un libro*/
    BookManager.prototype.readBook = function (pBook) {
        var bookRead;
        for (var i = 0; i < this.bookList.length; i++) {
            if (pBook == this.bookList[i]) {
                bookRead = fs.readFileSync('2022-09-19/bookContent/' + pBook.getBookName() + '.txt', 'utf-8');
                console.log(bookRead);
            }
        }
    };
    return BookManager;
}());
/* se crea objetos libros */
var book1 = new Book('Viaje al fin de la noche', 'Louis-Ferdinand Céline', 'Novela', 1932);
var book2 = new Book('Don Quijote de la Mancha', 'Miguel de Cervantes', 'Novela', 1605);
/* se crea lista de libros */
var bookList1 = [book1, book2];
/* se crea un libro nuevo */
var book3 = new Book('Los cuentos de Canterbury', 'Geoffrey Chaucer', 'Novela', 1882);
/* se crea un objeto Gestor */
var newManager = new BookManager('Gestor uno', bookList1);
/* se inserta un libro nuevo al Gestor */
newManager.insertNewBook(book3);
/* se consulta por un libro */
newManager.consultBook(book2);
/* se verifica la longitud de la lista para verificar si fue insertado el nuevo objeto libro*/
console.log(bookList1.length);
/* se lee libro guardado en .txt */
newManager.readBook(book1);
