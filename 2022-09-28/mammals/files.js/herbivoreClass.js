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
exports.Hervibore = void 0;
var mammalClass_1 = require("./mammalClass");
var Hervibore = /** @class */ (function (_super) {
    __extends(Hervibore, _super);
    function Hervibore(pAnimalName, pAge, pMovementType, pWeight, pFur) {
        return _super.call(this, pAnimalName, pAge, pMovementType, pWeight, pFur) || this;
    }
    Hervibore.prototype.feed = function () {
        this.eat();
        console.log("Los herviboros poseen dientes planos para triturar las plantas y pasturas de la que se alimentan.");
    };
    return Hervibore;
}(mammalClass_1.Mammal));
exports.Hervibore = Hervibore;
