export class Pregunta {
    private consigna:string;
    private opciones:String[];
    private opcionCorrecta:number;
    private puntaje:number;

    constructor(pConsigna:string,pOpciones:String[],pOpcionCorrecta:number,pPuntaje:number) {
        this.consigna=pConsigna;
        this.opciones=pOpciones;
        this.opcionCorrecta=pOpcionCorrecta;
        this.puntaje=pPuntaje;
    }
    public pregunta(consigna:string,puntaje:number):void{
        console.log(`La pregunta es ${consigna}. Puntaje ${puntaje}`);
    }
    public addOpcion(opcion:String):void {
        this.opciones.push(opcion);
    }
    public setOpcionCorrecta(opcionCorrecta:number):void{
        this.opcionCorrecta=opcionCorrecta;
        }
    public esCorrecta(respuesta:number):boolean{
        let aux=false;
        for(let i:number=0;i<=this.opciones.length;i++){
            if (respuesta===this.opcionCorrecta){
                aux=true;
            }
        }
        if(aux===true){
            console.log(`La respuesta de la pregunta ${this.consigna} es correcta.`);
                return true;
        } else {
            console.log(`La respuesta de la pregunta ${this.consigna} es incorrecta, la opcion correcta es la ${this.opcionCorrecta}.`);
                return false;
        }
    }
    public getPuntaje():number{
        return this.puntaje;
    }
}