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
exports.Massagist = void 0;
var personClass_1 = require("./personClass");
var Massagist = /** @class */ (function (_super) {
    __extends(Massagist, _super);
    function Massagist(pName, pSurname, pAge, pGender, pHeight, pSpecialty) {
        var _this = _super.call(this, pName, pSurname, pAge, pGender, pHeight) || this;
        _this.specialty = pSpecialty;
        return _this;
    }
    Massagist.prototype.getSpecialty = function () {
        return "La especialidad del masajista ".concat(this.getSurname(), " ").concat(this.getSurname(), " es ").concat(this.specialty);
    };
    Massagist.prototype.setSpecialty = function (newSpecialty) {
        this.specialty = newSpecialty;
    };
    Massagist.prototype.massage = function () {
        console.log("Se realiz\u00F3 un masaje al jugador");
    };
    return Massagist;
}(personClass_1.Person));
exports.Massagist = Massagist;
