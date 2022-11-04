"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(pClientList, pBookList, pMagazineList) {
        this.clientList = pClientList;
        this.bookList = pBookList;
        this.magazineList = pMagazineList;
    }
    Library.prototype.getMagazine = function (pMagazine) {
        var aux = false;
        for (var i = 0; i < this.magazineList.length; i++) {
            if (pMagazine === this.magazineList[i]) {
                aux = true;
            }
        }
        if (aux == true) {
            return "La revista es ".concat(pMagazine.getTittle());
        }
        else {
            throw Error("la revista no existe");
        }
    };
    Library.prototype.getBook = function (pBook) {
        var aux = false;
        for (var i = 0; i < this.bookList.length; i++) {
            if (pBook === this.bookList[i]) {
                aux = true;
            }
        }
        if (aux == true) {
            return "El libro es ".concat(pBook.getTittle());
        }
        else {
            throw Error("El libro no existe");
        }
    };
    Library.prototype.getClient = function (pClient) {
        var aux = false;
        for (var i = 0; i < this.clientList.length; i++) {
            if (pClient === this.clientList[i]) {
                aux = true;
            }
        }
        if (aux == true) {
            return "El cliente es ".concat(pClient.getSurname(), " ").concat(pClient.getName());
        }
        else {
            throw Error("Esta persona no es cliente de la libreria");
        }
    };
    Library.prototype.setMagazine = function (newMagazine) {
        this.magazineList.push(newMagazine);
    };
    Library.prototype.setBook = function (newBook) {
        this.bookList.push(newBook);
    };
    Library.prototype.setClient = function (newClient) {
        this.clientList.push(newClient);
    };
    Library.prototype.calculatePrice = function (client, article) {
        var priceWithDiscount = 0;
        priceWithDiscount = article.getPrice() * (1 - client.getDiscount());
        return priceWithDiscount;
    };
    Library.prototype.setDiscount = function (client, discount) {
        client.setDiscount(discount);
    };
    Library.prototype.soldArticle = function (client, article) {
        client.buy(article);
    };
    Library.prototype.viewPurchase = function (client, article) {
        var aux = 0;
        for (var i = 0; i < client.getShoppingCart().length; i++) {
            if (article.getTittle() == client.getShoppingCart()[i].getTittle()) {
                aux = 1;
            }
        }
        if (aux == 1) {
            return "El cliente ".concat(client.getSurname(), " ").concat(client.getName(), " ya compro el articulo ").concat(article.getTittle());
        }
        else {
            throw Error("El cliente ".concat(client.getName(), " aun no compro el articulo ").concat(article.getTittle()));
        }
    };
    return Library;
}());
exports.Library = Library;
