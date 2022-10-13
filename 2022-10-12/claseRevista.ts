import { Padre } from "./clasePadre";

export class Revista extends Padre {
    private numero:number;
    private año:number;

    public constructor(pTitulo:string,pPaginas:number,pAutor:string,pPrecio:number,pNumero:number,pAño:number){
        super(pTitulo,pPaginas,pAutor,pPrecio);
        this.numero=pNumero;
        this.año=pAño;
    }
    getNumero():number{
        return this.numero;
    }
    getAño():number{
        return this.año;
    }
}