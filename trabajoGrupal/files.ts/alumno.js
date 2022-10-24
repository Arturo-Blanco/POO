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
            if (examen == this.examenesRendidos[i].getExamen()) {
                this.examenesRendidos[i].rendicionDeExamen(examen, respuestas);
                aux = true;
            }
        }
        if (aux == true) {
            console.log("El alumno ".concat(this.nombre, " acaba de rendir el examen de ").concat(examen.getTema(), "."));
            return true;
        }
        else {
            console.log("El alumno ".concat(this.nombre, " ya rindio el examen de ").concat(examen.getTema(), "."));
            return false;
        }
    };
    return Alumno;
}());
exports.Alumno = Alumno;
