export class Padre {
    protected titulo:string;
    protected cantidadPag:number;
    protected autor:string;
    protected precio:number;

    public constructor(pTitulo:string,pPaginas:number,pAutor:string,pPrecio:number){
        this.titulo=pTitulo;
        this.cantidadPag=pPaginas;
        this.autor=pAutor;
        this.precio=pPrecio;
    }
    getTitulo():string{
    return this.titulo;
    }
    getCantPaginas():number{
        return this.cantidadPag;
    }
    getAutor():string{
        return this.autor;
    }
    getPrecio():number{
        return this.precio;
    }
}