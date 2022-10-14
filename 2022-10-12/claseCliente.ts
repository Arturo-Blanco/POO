export class Cliente {
    private nombre:string;
    private apellido:string;
    private DNI:number;
    private direccion:string;
    private listAutorFav:string[];
    private listGenFav:string[];
    private descuento:number;

    public constructor(pNombre:string,pApellido:string,pDNI:number,pDireccion:string,pListAutorFav:string[],pListGenFav:string[],pDescuento:number){
        this.nombre=pNombre;
        this.apellido=pApellido;
        this.DNI=pDNI;
        this.direccion=pDireccion;
        this.listAutorFav=pListAutorFav;
        this.listGenFav=pListGenFav;
        this.descuento=pDescuento;
    }
    getNombre():string{
        return this.nombre;
    }
    getApellido():string{
        return this.apellido;
    }
    getDNI():number{
        return this.DNI;
    }
    getDireccion():string{
        return this.direccion;
    }
    getListaAutoresFavoritos():string[] {
        return this.listAutorFav;
    }
    getListaGeneroFavoritos():string[]{
        return this.listGenFav;
    }
    getDescuento():number{
        return this.descuento;
    }
    }
