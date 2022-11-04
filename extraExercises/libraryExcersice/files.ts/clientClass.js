"use strict";
exports.__esModule = true;
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(pName, pSurname, pID, pAddress, pDiscount) {
        this.name = pName;
        this.surname = pSurname;
        this.ID = pID;
        this.address = pAddress;
        this.favoriteAuthorList = [];
        this.favoriteGenreList = [];
        this.discount = pDiscount;
        this.shoppingCart = [];
    }
    Client.prototype.getName = function () {
        return this.name;
    };
    Client.prototype.getSurname = function () {
        return this.surname;
    };
    Client.prototype.getID = function () {
        return this.ID;
    };
    Client.prototype.getAddress = function () {
        return this.address;
    };
    Client.prototype.getFavoriteAuthosrList = function () {
        if (this.favoriteAuthorList.length !== 0) {
            return this.favoriteAuthorList;
        }
        else {
            throw new Error("El cliente ".concat(this.surname, " ").concat(this.name, " aun no tiene autores favoritos"));
        }
    };
    Client.prototype.getFavoriteGenreList = function () {
        if (this.favoriteGenreList.length !== 0) {
            return this.favoriteGenreList;
        }
        else {
            throw new Error("El cliente ".concat(this.surname, " ").concat(this.name, " aun no tiene generos favoritos"));
        }
    };
    Client.prototype.addFavoriteGenre = function (newGenre) {
        this.favoriteGenreList.push(newGenre);
    };
    Client.prototype.addFavoriteAuthor = function (newAuthor) {
        this.favoriteAuthorList.push(newAuthor);
    };
    Client.prototype.getDiscount = function () {
        return this.discount;
    };
    Client.prototype.setDiscount = function (newDiscount) {
        this.discount = newDiscount;
    };
    Client.prototype.getShoppingCart = function () {
        return this.shoppingCart;
    };
    Client.prototype.buy = function (article) {
        this.shoppingCart.push(article);
    };
    return Client;
}());
exports.Client = Client;
