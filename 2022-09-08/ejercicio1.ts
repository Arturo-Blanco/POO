class Heladera {
    public estaPrendido : boolean;
    public temperaturaActual: number;
    public marca: string ;
    public litros: number;
    public tipoTecnologia: string;

    constructor(paramMarca: string, paramTemperatura: number, paramTecnologia: string) {
        this.marca= paramMarca;
        this.temperaturaActual= paramTemperatura;
        this.tipoTecnologia= paramTecnologia;
    }
prenderApagar():void{
    if(this.estaPrendido === true){
        this.estaPrendido = false;
    }else{
        this.estaPrendido = true;
    }
}
obtenerTemperatura():number{
    return this.temperaturaActual;
}
obtenerLitros():number{
    return this.litros;
}
obtenerMArca(): string {
    return this.marca;
}
obtenerTipo(): string {
    return this.tipoTecnologia;
}
}
let primerHeladera = new Heladera('LG',10, 'noFrost');
let obtenerMarca : string = primerHeladera.obtenerMArca();
let obtenerTemperatura: number = primerHeladera.obtenerTemperatura();
let obtenerTecnologia: string = primerHeladera.obtenerTipo();

console.log('Tengo una heladera '+obtenerMarca+', esta confugurada a '+ obtenerTemperatura+' grados, y es de tipo '+obtenerTecnologia);