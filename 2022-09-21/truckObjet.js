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
exports.Truck = void 0;
var automotiveObjet_1 = require("./automotiveObjet");
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(pBrand, pModel, pYear, pColour, pPatent, pFuelType, pTrailer) {
        var _this = _super.call(this, pBrand, pModel, pYear, pColour, pPatent, pFuelType) || this;
        _this.trailer = pTrailer;
        return _this;
    }
    Truck.prototype.getTrailerType = function () {
        return this.trailer;
    };
    Truck.prototype.setTrailerType = function (newTrailer) {
        this.trailer = newTrailer;
    };
    return Truck;
}(automotiveObjet_1.Vehicle));
exports.Truck = Truck;
var truck1 = new Truck('volvo', 'x21', 2018, 'Rojo', 'OSX432', 'Euro', 'Congelados');
truck1.getBrand();
