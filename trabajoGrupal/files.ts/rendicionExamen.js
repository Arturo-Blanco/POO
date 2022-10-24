"use strict";
exports.__esModule = true;
exports.RendicionDeExamen = void 0;
var RendicionDeExamen = /** @class */ (function () {
    function RendicionDeExamen(pExamen, pRespuestas) {
        this.examen = pExamen;
        this.respuestas = pRespuestas;
    }
    RendicionDeExamen.prototype.rendicionDeExamen = function (examen, respuestas) {
        if (examen == this.examen) {
            for (var i = 0; i < respuestas.length; i++) {
                this.respuestas.push(respuestas[i]);
            }
        }
    };
    RendicionDeExamen.prototype.getExamen = function () {
        return this.examen;
    };
    RendicionDeExamen.prototype.estaAprobado = function () {
        if (this.examen.equals(this.respuestas) === true) {
            console.log("El alumno aprobo el examen de ".concat(this.examen.getTema(), "."));
            return true;
        }
        else {
            console.log("El alumno desaprobo el examen de ".concat(this.examen.getTema(), "."));
            return false;
        }
    };
    return RendicionDeExamen;
}());
exports.RendicionDeExamen = RendicionDeExamen;
