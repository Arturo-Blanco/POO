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
exports.ExamenEspecial = void 0;
var examen_1 = require("./examen");
var ExamenEspecial = /** @class */ (function (_super) {
    __extends(ExamenEspecial, _super);
    function ExamenEspecial(pPreguntas, pTema, pPuntaje, pPenalizacion) {
        var _this = _super.call(this, pPreguntas, pTema, pPuntaje) || this;
        _this.penalizacionRepuestaIncorrecta = pPenalizacion;
        return _this;
    }
    ExamenEspecial.prototype.examenEspecial = function (tema, puntajeAprobacion, penalizacion) {
        console.log("El tema es ".concat(tema, ", el puntaje de aprobacion es ").concat(puntajeAprobacion, " y la penalizacion es ").concat(penalizacion));
    };
    ExamenEspecial.prototype.addPregunta = function (pregunta) {
        this.preguntas.push(pregunta);
    };
    ExamenEspecial.prototype.getPenalizacionRespuestaIncorrecta = function () {
        return this.penalizacionRepuestaIncorrecta;
    };
    return ExamenEspecial;
}(examen_1.Examen));
exports.ExamenEspecial = ExamenEspecial;
