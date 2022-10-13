"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(pNombre, pApellido, pDNI, pDireccion, pListAutorFav, pListGenFav, pDescuento) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.DNI = pDNI;
        this.direccion = pDireccion;
        this.listAutorFav = pListAutorFav;
        this.listGenFav = pListGenFav;
        this.descuento = pDescuento;
    }
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.getApellido = function () {
        return this.apellido;
    };
    Cliente.prototype.getDNI = function () {
        return this.DNI;
    };
    Cliente.prototype.getDireccion = function () {
        return this.direccion;
    };
    Cliente.prototype.getListaAutoresFavoritos = function () {
        return this.listAutorFav;
    };
    Cliente.prototype.getListaGeneroFavoritos = function () {
        return this.listGenFav;
    };
    Cliente.prototype.getDescuento = function () {
        return this.descuento;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
