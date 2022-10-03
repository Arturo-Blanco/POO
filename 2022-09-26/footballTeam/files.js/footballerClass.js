"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Footballer = void 0;
var personClass_1 = require("./personClass");
var Footballer = /** @class */ (function (_super) {
    __extends(Footballer, _super);
    function Footballer(pName, pSurname, pAge, pGender, pHeight, pGamePosition, pShirtNumber, pHeadline) {
        var _this = _super.call(this, pName, pSurname, pAge, pGender, pHeight) || this;
        _this.gamePosition = pGamePosition;
        _this.shirtNumber = pShirtNumber;
        _this.headline = pHeadline;
        return _this;
    }
    Footballer.prototype.getGamePosition = function () {
        return "El jugador ".concat(this.getSurname(), " juega en la posicion ").concat(this.gamePosition);
    };
    Footballer.prototype.getShirtNumber = function () {
        return "El jugador ".concat(this.getSurname(), " usa la camiseta numero ").concat(this.shirtNumber);
    };
    Footballer.prototype.getState = function () {
        if (this.headline == true) {
            console.log("El jugador ".concat(this.surname, " ").concat(this.name, " es titular"));
        }
        else {
            console.log("El jugador ".concat(this.surname, " ").concat(this.name, " es suplente"));
        }
    };
    Footballer.prototype.setGamePosition = function (newPosition) {
        this.gamePosition = newPosition;
    };
    Footballer.prototype.setShirtNumber = function (newNumber) {
        this.shirtNumber = newNumber;
    };
    Footballer.prototype.setState = function (newState) {
        this.headline = newState;
    };
    return Footballer;
}(personClass_1.Person));
exports.Footballer = Footballer;
