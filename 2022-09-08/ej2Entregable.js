var Auto = /** @class */ (function () {
    function Auto(paramVehiculo, paramMarca, paramModelo, paramColor, paramAño, paramVelocidad) {
        this.vehiculo = paramVehiculo;
        this.marca = paramMarca;
        this.modelo = paramModelo;
        this.color = paramColor;
        this.velocidad = paramVelocidad;
        this.año = paramAño;
    }
    Auto.prototype.prenderApagar = function () {
        if (this.estaEncendido === true) {
            this.estaEncendido = false;
        }
        else {
            this.estaEncendido = true;
        }
    };
    Auto.prototype.obtenerMarcaVehiculo = function () {
        return this.marca + ' ' + this.modelo;
    };
    Auto.prototype.añoVehiculo = function () {
        return this.año;
    };
    Auto.prototype.colorVehiculo = function () {
        return this.color;
    };
    Auto.prototype.velocidadActual = function () {
        return this.velocidad;
    };
    Auto.prototype.cantidadPuertas = function () {
        return this.numeroPuertas;
    };
    Auto.prototype.tipoVehiculo = function () {
        return this.vehiculo;
    };
    Auto.prototype.tipoCombustible = function () {
        return this.combustible;
    };
    Auto.prototype.consumoCombustible = function () {
        return this.consumo;
    };
    Auto.prototype.capacidadTanque = function () {
        return this.tanque;
    };
    Auto.prototype.acelerarVehiculo = function (km) {
        this.velocidad += km;
    };
    Auto.prototype.frenarVehiculo = function () {
        this.velocidad === 0;
    };
    return Auto;
}());
var autoNuevo = new Auto('auto', 'Volkswagen', 'Gol', 'Azul', 2018, 50);
var tipoVehiculoNuevo = autoNuevo.tipoVehiculo();
var marcaAutoNuevo = autoNuevo.obtenerMarcaVehiculo();
var añoAutoNuevo = autoNuevo.añoVehiculo();
var colorAutoNuevo = autoNuevo.colorVehiculo();
var velocidadAutoNuevo = autoNuevo.velocidadActual();
console.log('Mi nuevo vehiculo es un ' + tipoVehiculoNuevo + ', marca ' + marcaAutoNuevo + ', año ' + añoAutoNuevo + ', color ' + colorAutoNuevo + ' y ahora esta rodando a ' + velocidadAutoNuevo + ' km/h.');
