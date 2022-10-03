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
exports.technicalDirector1 = exports.TechnicalDirector = void 0;
var footballerClass_1 = require("./footballerClass");
var personClass_1 = require("./personClass");
var TechnicalDirector = /** @class */ (function (_super) {
    __extends(TechnicalDirector, _super);
    function TechnicalDirector(pName, pSurname, pAge, pGender, pHeight, pFirstTeam, pFootballer) {
        var _this = _super.call(this, pName, pSurname, pAge, pGender, pHeight) || this;
        _this.firstTeam = pFirstTeam;
        _this.footballPlayers = pFootballer;
        return _this;
    }
    TechnicalDirector.prototype.getFirstTeam = function () {
        if (this.firstTeam == true) {
            console.log("Es el primer equipo que dirige ".concat(this.getSurname(), " ").concat(this.getName()));
        }
        else {
            console.log("No es el primer equipo que dirige ".concat(this.getSurname(), " ").concat(this.getName()));
        }
    };
    TechnicalDirector.prototype.setFirstTeam = function (newState) {
        this.firstTeam = newState;
    };
    TechnicalDirector.prototype.changePlayer = function (player) {
        for (var i = 0; i < this.footballPlayers.length; i++) {
            if (player == this.footballPlayers[i] && player.getState() == true) {
                player.setState(false);
                console.log("El jugador ".concat(player.getName(), " va a la banca"));
            }
            else {
                player.setState(true);
                console.log("El jugador ".concat(player.getName(), " es titular"));
            }
        }
    };
    return TechnicalDirector;
}(personClass_1.Person));
exports.TechnicalDirector = TechnicalDirector;
exports.technicalDirector1 = new TechnicalDirector('Juan', 'Rodriguez', 45, 'Hombre', 1.75, true, footballerClass_1.footballPlayers);
