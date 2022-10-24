"use strict";
exports.__esModule = true;
exports.Examen = void 0;
var Examen = /** @class */ (function () {
    function Examen(pPreguntas, pTema, pPuntajeAprobacion) {
        this.preguntas = pPreguntas;
        this.tema = pTema;
        this.puntajeAprobacion = pPuntajeAprobacion;
    }
    Examen.prototype.examen = function (tema, puntajeAprobacion) {
        console.log("El tema ".concat(tema, " se aprueba con ").concat(puntajeAprobacion, "."));
    };
    Examen.prototype.addPregunta = function (pregunta) {
        this.preguntas.push(pregunta);
    };
    /* Lucas nos aconseja reemplazar Object por un arreglo de numeros para que el codigo no se rompa al ejecutar
    public equals(o:Object):boolean{
        let aux=0;
        for(let i:number=0;i<this.preguntas.length;i++){
            if(this.preguntas[i].esCorrecta(o[i])){
                aux=aux+this.preguntas[i].getPuntaje();
            }
        }if(aux>=this.puntajeAprobacion){
            return true;
        }else{
            return false;
        }
    }*/
    Examen.prototype.equals = function (respuestasExamen) {
        var aux = 0;
        for (var i = 0; i < this.preguntas.length; i++) {
            if (this.preguntas[i].esCorrecta(respuestasExamen[i])) {
                aux = aux + this.preguntas[i].getPuntaje();
            }
        }
        if (aux >= this.puntajeAprobacion) {
            return true;
        }
        else {
            return false;
        }
    };
    Examen.prototype.getTema = function () {
        return this.tema;
    };
    return Examen;
}());
exports.Examen = Examen;
