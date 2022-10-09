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
exports.Omnivore = void 0;
var mammalClass_1 = require("./mammalClass");
var Omnivore = /** @class */ (function (_super) {
    __extends(Omnivore, _super);
    function Omnivore(pAnimalName, pAge, pMovementType, pWeight, pFur) {
        return _super.call(this, pAnimalName, pAge, pMovementType, pWeight, pFur) || this;
    }
    Omnivore.prototype.feed = function () {
        this.eat();
        console.log("Los omnivoros de alimentan con una dieta de plantas y carnes.");
    };
    return Omnivore;
}(mammalClass_1.Mammal));
exports.Omnivore = Omnivore;
