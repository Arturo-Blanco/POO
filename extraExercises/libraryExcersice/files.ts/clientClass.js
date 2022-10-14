"use strict";
exports.__esModule = true;
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(pName, pSurname, pID, pAddress, pFavoriteAuthosrList, pFavoriteGenreList, pDiscount) {
        this.name = pName;
        this.surname = pSurname;
        this.ID = pID;
        this.address = pAddress;
        this.favoriteAuthosrList = pFavoriteAuthosrList;
        this.favoriteGenreList = pFavoriteGenreList;
        if (pDiscount !== undefined) {
            this.discount = pDiscount;
        }
        else {
            console.log("El cliente ".concat(this.surname, " ").concat(this.name, " no tiene descuento"));
        }
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
    return Client;
}());
exports.Client = Client;
