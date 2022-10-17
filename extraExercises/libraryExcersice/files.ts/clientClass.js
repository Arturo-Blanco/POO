"use strict";
exports.__esModule = true;
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(pName, pSurname, pID, pAddress, pFavoriteAuthosrList, pFavoriteGenreList, pDiscount, pShoppingCart) {
        this.name = pName;
        this.surname = pSurname;
        this.ID = pID;
        this.address = pAddress;
        this.favoriteAuthosrList = pFavoriteAuthosrList;
        this.favoriteGenreList = pFavoriteGenreList;
        this.discount = pDiscount;
        this.shoppingCart = pShoppingCart;
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
        return this.favoriteAuthosrList;
    };
    Client.prototype.getFavoriteGenreList = function () {
        return this.favoriteGenreList;
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
