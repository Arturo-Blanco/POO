"use strict";
exports.__esModule = true;
exports.Libreria = void 0;
var Libreria = /** @class */ (function () {
    function Libreria(pListaClientes, pListaLibros, pListaRevista) {
        this.listaClientes = pListaClientes;
        this.listaLibros = pListaLibros;
        this.listaRevistas = pListaRevista;
    }
    Libreria.prototype.setRevista = function (nuevaRevista) {
        this.listaRevistas.push(nuevaRevista);
    };
    Libreria.prototype.setLibro = function (nuevoLibro) {
        this.listaLibros.push(nuevoLibro);
    };
    Libreria.prototype.setCliente = function (nuevoCliente) {
        this.listaClientes.push(nuevoCliente);
    };
    Libreria.prototype.calcularPrecio = function (cliente, articulo) {
        var precioConDescuento = 0;
        precioConDescuento = articulo.getPrecio() * (1 - cliente.getDescuento());
        return precioConDescuento;
    };
    return Libreria;
}());
exports.Libreria = Libreria;
