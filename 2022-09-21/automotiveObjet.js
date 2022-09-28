"use strict";
exports.__esModule = true;
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(pBrand, pModel, pYear, pColour, pPatent, pFuelType, pEngine) {
        this.brand = pBrand;
        this.model = pModel;
        this.year = pYear;
        this.colour = pColour;
        this.vehiclePatent = pPatent;
        this.fuelType = pFuelType;
        if (pEngine == undefined) {
            console.log('El vehiculo no tiene motor');
        }
        else {
            console.log('El vehiculo tiene motor');
        }
    }
    Vehicle.prototype.getBrand = function () {
        return this.brand;
    };
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.getColour = function () {
        return this.colour;
    };
    Vehicle.prototype.getFuelType = function () {
        return this.fuelType;
    };
    Vehicle.prototype.getVehiclePatent = function () {
        return this.vehiclePatent;
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
