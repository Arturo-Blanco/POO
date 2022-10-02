"use strict";
exports.__esModule = true;
var dtClass_1 = require("./dtClass");
var footballerClass_1 = require("./footballerClass");
var massagistClass_1 = require("./massagistClass");
var FootballTeam = /** @class */ (function () {
    function FootballTeam(pNameTeam, pTechnicalDirector, pFootballPlayers, pMassagist) {
        this.nameTeam = pNameTeam;
        this.technicalDirector = pTechnicalDirector;
        this.footballPlayers = pFootballPlayers;
        this.massagist = pMassagist;
    }
    FootballTeam.prototype.getNameTeam = function () {
        return this.nameTeam;
    };
    FootballTeam.prototype.setNameTeam = function (newName) {
        this.nameTeam = newName;
    };
    FootballTeam.prototype.hireTechnicalDirector = function (newTechnicalDirector) {
        console.log("Se ha contratado al director tecnico ".concat(newTechnicalDirector.getName()));
    };
    FootballTeam.prototype.buyPlayer = function (newPlayer) {
        this.footballPlayers.push(newPlayer);
        console.log("El equipo ".concat(this.nameTeam, " compr\u00F3 al jugador ").concat(newPlayer.getName()));
    };
    FootballTeam.prototype.hireMassagist = function (newMassagist) {
        console.log("Se ha contratado al director tecnico ".concat(newMassagist.getName()));
    };
    FootballTeam.prototype.fireTechnicalDirector = function (technicalDirector) {
        console.log("Se despidio al entrenador ".concat(technicalDirector.getName()));
    };
    FootballTeam.prototype.sellPlayer = function (player) {
        for (var i = 0; i < this.footballPlayers.length; i++) {
            if (player == this.footballPlayers[i]) {
                this.footballPlayers.splice(i, 1);
            }
        }
        console.log("Se vendio al jugador ".concat(player.getSurname(), " ").concat(player.getName()));
    };
    FootballTeam.prototype.fireMassagist = function (massagist) {
        console.log("Se despidio al masajista ".concat(massagist.getName()));
    };
    return FootballTeam;
}());
var Team1 = new FootballTeam('Talleres', dtClass_1.technicalDirector1, footballerClass_1.footballPlayers, massagistClass_1.massagist1);
console.log(Team1);