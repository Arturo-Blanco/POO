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
        for (var i = 0; i < this.magazineList.length; i++) {
            if (pMagazine === this.magazineList[i]) {
                break;
            }
        }
        return "La revista es ".concat(pMagazine.getTittle());
    };
    Library.prototype.getBook = function (pBook) {
        for (var i = 0; i < this.bookList.length; i++) {
            if (pBook === this.bookList[i]) {
                break;
            }
        }
        return "El libro es ".concat(pBook.getTittle());
    };
    Library.prototype.getClient = function (pClient) {
        for (var i = 0; i < this.clientList.length; i++) {
            if (pClient === this.clientList[i]) {
                break;
            }
        }
        return "El cliente es ".concat(pClient.getSurname(), " ").concat(pClient.getName());
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
    return Library;
}());
exports.Library = Library;
