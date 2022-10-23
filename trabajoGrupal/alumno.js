"use strict";
exports.__esModule = true;
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(pExamenesRendidos, pNombre, pDni) {
        this.examenesRendidos = pExamenesRendidos;
        this.nombre = pNombre;
        this.dni = pDni;
    }
    Alumno.prototype.alumno = function (nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;
    };
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.getDni = function () {
        return this.dni;
    };
    Alumno.prototype.rendirExamen = function (examen, respuestas) {
        var aux = false;
        for (var i = 0; i < this.examenesRendidos.length; i++) {
            if (examen === this.examenesRendidos[i].getExamen()) {
                aux = true;
            }
        }
        if (aux == true) {
            console.log("Las respuestas del alumno ".concat(this.nombre, " son ").concat(respuestas));
            return true;
        }
        else {
            console.log("El alumno ".concat(this.nombre, " aun no rindio el examen ").concat(examen.getTema()));
            return false;
        }
    };
    return Alumno;
}());
exports.Alumno = Alumno;
