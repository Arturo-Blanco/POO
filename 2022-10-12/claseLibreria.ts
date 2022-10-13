import { Cliente } from "./claseCliente";
import { Revista } from "./claseRevista";
import { Libro } from "./claseLibro";
import { Padre } from "./clasePadre";

export class Libreria {
    private listaClientes:Cliente[];
    private listaLibros:Libro[];
    private listaRevistas:Revista[];

    public constructor(pListaClientes:Cliente[],pListaLibros:Libro[],pListaRevista:Revista[]) {
        this.listaClientes=pListaClientes;
        this.listaLibros=pListaLibros;
        this.listaRevistas=pListaRevista;
    }
    setRevista(nuevaRevista:Revista):void{
        this.listaRevistas.push(nuevaRevista);
    }
    setLibro(nuevoLibro:Libro):void{
        this.listaLibros.push(nuevoLibro);
    }
    setCliente(nuevoCliente:Cliente):void{
        this.listaClientes.push(nuevoCliente);
    }
    calcularPrecio(cliente:Cliente,articulo:Padre):number{
        let precioConDescuento:number=0;
        precioConDescuento=articulo.getPrecio()*(1-cliente.getDescuento());
        return precioConDescuento;
    } 
}   

