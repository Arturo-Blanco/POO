"use strict";
exports.__esModule = true;
exports.Mammal = void 0;
var Mammal = /** @class */ (function () {
    function Mammal(pAnimalName, pAge, pMovementType, pWeight, pFur) {
        this.animalName = pAnimalName;
        this.age = pAge;
        this.movementType = pMovementType;
        this.weight = pWeight;
        this.fur = pFur;
    }
    Mammal.prototype.getAnimalName = function () {
        return this.animalName;
    };
    Mammal.prototype.getAge = function () {
        return this.age;
    };
    Mammal.prototype.getMovementType = function () {
        return this.movementType;
    };
    Mammal.prototype.getWeight = function () {
        return this.weight;
    };
    Mammal.prototype.getFur = function () {
        if (this.fur == true) {
            return "El animal ".concat(this.animalName, " tiene pelaje en su cuerpo");
        }
        else {
            return "El animal ".concat(this.animalName, " no tiene pelaje en su cuerpo");
        }
    };
    Mammal.prototype.setAnimalName = function (newName) {
        this.animalName = newName;
    };
    Mammal.prototype.setAge = function (newAge) {
        this.age = newAge;
    };
    Mammal.prototype.setMovementType = function (newMovementType) {
        this.movementType = newMovementType;
    };
    Mammal.prototype.setWeight = function (newWeight) {
        this.weight = newWeight;
    };
    Mammal.prototype.setFur = function (newFur) {
        this.fur = newFur;
    };
    Mammal.prototype.move = function (distanceMeters) {
        console.log("El animal ".concat(this.animalName, " se movi\u00F3 ").concat(distanceMeters, " metros."));
    };
    Mammal.prototype.eat = function () {
        console.log("El animal ".concat(this.animalName, " se esta alimentando"));
    };
    Mammal.prototype.sleep = function (hoursTime) {
        console.log("El animal ".concat(this.animalName, " durmio por ").concat(hoursTime, " horas."));
    };
    return Mammal;
}());
exports.Mammal = Mammal;
