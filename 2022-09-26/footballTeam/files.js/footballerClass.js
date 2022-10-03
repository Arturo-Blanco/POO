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
exports.footballPlayers = exports.Footballer = void 0;
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
var footballer1 = new Footballer('Hernan', 'Rodriguez', 27, 'Hombre', 1.78, 'Arquero', 1, true);
var footballer2 = new Footballer('Miguel', 'Alcaraz', 30, 'Hombre', 1.72, 'Defensor', 5, true);
var footballer3 = new Footballer('Leo', 'Blanco', 28, 'Hombre', 1.75, 'Defensor', 4, false);
var footballer4 = new Footballer('Martin', 'Cantos', 24, 'Hombre', 1.75, 'Defensor', 3, true);
var footballer5 = new Footballer('Ivan', 'Acosta', 22, 'Hombre', 1.76, 'Defensor', 12, true);
var footballer6 = new Footballer('Franco', 'Gutierrez', 25, 'Hombre', 1.70, 'Mediocentro', 7, false);
var footballer7 = new Footballer('Luis', 'Hernandez', 26, 'Hombre', 1.68, 'Lateral Izquierdo', 6, false);
var footballer8 = new Footballer('Nicolas', 'Cortez', 32, 'Hombre', 1.72, 'Lateral derecho', 8, true);
var footballer9 = new Footballer('Sebastian', 'Messi', 28, 'Hombre', 1.70, 'Delantero', 10, false);
var footballer10 = new Footballer('Cristian', 'Fernandez', 25, 'Hombre', 1.72, 'Delantero', 17, true);
var footballer11 = new Footballer('Fabio', 'Perez', 32, 'Hombre', 1.68, 'Delantero', 15, true);
exports.footballPlayers = [footballer1, footballer2, footballer3, footballer4, footballer5, footballer6, footballer7, footballer8, footballer9, footballer10, footballer11];
