var Book = /** @class */ (function () {
    function Book(pBookName, pBookAuthor, pBookType, pBookYear) {
        this.bookName = pBookName;
        this.bookType = pBookType;
        this.bookAuthor = pBookAuthor;
        if (pBookYear == undefined) {
            this.bookYear = '"no se conoce el año del libro"';
        }
        else {
            this.bookYear = pBookYear;
        }
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
    BookManager.prototype.insertNewBook = function (pName, pAutor, pType, pYear) {
        var newBook = new Book(pName, pAutor, pType, pYear);
        this.bookList.push(newBook);
        console.log("Se ah a\u00F1adido el libro ".concat(pName, ", del autor ").concat(pAutor, ", de tipo ").concat(pType, ", publicado el a\u00F1o ").concat(pYear));
    };
    BookManager.prototype.consultBook = function (pBook) {
        for (var i = 0; i < this.bookList.length; i++) {
            if (pBook.getBookName() === this.bookList[i].getBookName()) {
                break;
            }
        }
        console.log("El libro se llama ".concat(pBook.getBookName(), ", escrito por ").concat(pBook.getBookAuthor(), ", del g\u00E9nero ").concat(pBook.getBookType(), ", publicado el a\u00F1o ").concat(pBook.getBookYear(), "."));
    };
    BookManager.prototype.modifyName = function (pBook, pNewName) {
        for (var i = 0; i < this.bookList.length; i++) {
            if (pBook == this.bookList[i] && this.bookList[i].getBookName() != pNewName) {
                this.bookList[i].setBookName(pNewName);
                break;
            }
        }
    };
    BookManager.prototype.modifyType = function (pBook, pNewType) {
        for (var i = 0; i < this.bookList.length; i++) {
            if (pBook == this.bookList[i] && this.bookList[i].getBookType() != pNewType) {
                this.bookList[i].setBookType(pNewType);
                break;
            }
        }
    };
    BookManager.prototype.modifyAuthor = function (pBook, pNewAuthor) {
        for (var i = 0; i < this.bookList.length; i++) {
            if (pBook == this.bookList[i] && this.bookList[i].getBookAuthor() != pNewAuthor) {
                this.bookList[i].setBookAuthor(pNewAuthor);
                break;
            }
        }
    };
    BookManager.prototype.modifyYear = function (pBook, pNewYear) {
        for (var i = 0; i < this.bookList.length; i++) {
            if (pBook == this.bookList[i] && this.bookList[i].getBookYear() != pNewYear) {
                this.bookList[i].setBookYear(pNewYear);
                break;
            }
        }
    };
    BookManager.prototype.deleteBook = function (pbook) {
        for (var i = 0; i < this.bookList.length; i++) {
            if (pbook == this.bookList[i]) {
                this.bookList.splice(i, 1);
                break;
            }
        }
        console.log("Se ha eliminado el libro ".concat(pbook.getBookName(), ", del autor ").concat(pbook.getBookAuthor(), "."));
    };
    return BookManager;
}());
var book1 = new Book('Viaje al fin de la noche', 'Louis-Ferdinand Céline', 'Novela', 1932);
var book2 = new Book('Don Quijote de la Mancha', 'Miguel de Cervantes', 'Novela', 1605);
var bookList1 = [book1, book2];
var newManager = new BookManager('Gestor uno', bookList1);
var book3 = newManager.insertNewBook('Los cuentos de Canterbury', 'Geoffrey Chaucer', 'Novela', 1882);
newManager.consultBook(book2);
console.log(bookList1.length);
newManager.deleteBook(book1);
