"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(pName, pSurname, pAge, pGender, pHeight) {
        this.name = pName;
        this.surname = pSurname;
        this.age = pAge;
        this.gender = pGender;
        this.height = pHeight;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getSurname = function () {
        return this.surname;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getGender = function () {
        return this.gender;
    };
    Person.prototype.getHeight = function () {
        return this.height;
    };
    Person.prototype.setName = function (newName) {
        this.name = newName;
    };
    Person.prototype.setSurname = function (newSurname) {
        this.surname = newSurname;
    };
    Person.prototype.setAge = function (newAge) {
        this.age = newAge;
    };
    Person.prototype.setGender = function (newGender) {
        this.gender = newGender;
    };
    Person.prototype.setHeight = function (newHeight) {
        this.height = newHeight;
    };
    return Person;
}());
exports.Person = Person;
