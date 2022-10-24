"use strict";
exports.__esModule = true;
exports.Pregunta = void 0;
var Pregunta = /** @class */ (function () {
    function Pregunta(pConsigna, pOpciones, pOpcionCorrecta, pPuntaje) {
        this.consigna = pConsigna;
        this.opciones = pOpciones;
        this.opcionCorrecta = pOpcionCorrecta;
        this.puntaje = pPuntaje;
    }
    Pregunta.prototype.pregunta = function (consigna, puntaje) {
        console.log("La pregunta es ".concat(consigna, ". Puntaje ").concat(puntaje));
    };
    Pregunta.prototype.addOpcion = function (opcion) {
        this.opciones.push(opcion);
    };
    Pregunta.prototype.setOpcionCorrecta = function (opcionCorrecta) {
        this.opcionCorrecta = opcionCorrecta;
    };
    Pregunta.prototype.esCorrecta = function (respuesta) {
        var aux = false;
        for (var i = 0; i <= this.opciones.length; i++) {
            if (respuesta === this.opcionCorrecta) {
                aux = true;
            }
        }
        if (aux === true) {
            console.log("La respuesta de la pregunta ".concat(this.consigna, " es correcta."));
            return true;
        }
        else {
            console.log("La respuesta de la pregunta ".concat(this.consigna, " es incorrecta, la opcion correcta es la ").concat(this.opcionCorrecta, "."));
            return false;
        }
    };
    Pregunta.prototype.getPuntaje = function () {
        return this.puntaje;
    };
    return Pregunta;
}());
exports.Pregunta = Pregunta;
