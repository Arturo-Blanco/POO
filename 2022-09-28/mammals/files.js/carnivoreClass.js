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
exports.Carnivore = void 0;
var mammalClass_1 = require("./mammalClass");
var Carnivore = /** @class */ (function (_super) {
    __extends(Carnivore, _super);
    function Carnivore(pAnimalName, pAge, pMovementType, pWeight, pFur) {
        return _super.call(this, pAnimalName, pAge, pMovementType, pWeight, pFur) || this;
    }
    Carnivore.prototype.feed = function () {
        this.eat();
        console.log("Los carnivoros poseen dientes y garras afiladas para desgarrar la carne de sus presas.");
    };
    return Carnivore;
}(mammalClass_1.Mammal));
exports.Carnivore = Carnivore;
