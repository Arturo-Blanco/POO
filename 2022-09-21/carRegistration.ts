import * as registeredCars from '2022-09-21/carObjet.ts';

class carRegistered{
    public registeredCars:Car[];
    constructor(listadoParametro:Auto[]){
        this.listadoDeAutos = listadoParametro;
    }

    consultarSiExisteVehiculo(paramAuto:Auto):boolean{
        let respuesta : boolean = false;
        let posicion = -1;
        for(let i:number = 0;i<this.listadoDeAutos.length;i++){
            if(this.listadoDeAutos[i].getPatente() === paramAuto.getPatente()){
                posicion = i;
                respuesta = true;
        }
    }
        console.log(posicion);
        return respuesta;
    }


    registrarVehiculo(paramAuto:Auto):void{
        this.listadoDeAutos.push(paramAuto);
    }


    eliminarVehiculo(paramAuto:Auto):void{
        for(let i:number = 0;i<this.listadoDeAutos.length;i++){
            if(this.listadoDeAutos[i].getPatente() === paramAuto.getPatente()){
                this.listadoDeAutos.splice(i,1);
            }
        }
    }

    editarVehiculo(posicion:number,patenteParametro:string,marcaParametro:string):void{
        this.listadoDeAutos[posicion].setPatente(patenteParametro);
        this.listadoDeAutos[posicion].setMarca(marcaParametro);
    }


   }
