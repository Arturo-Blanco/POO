export class Pregunta {
    protected consigna: string;
    protected opciones: String[];
    protected opcionCorrecta: number;
    protected puntaje: number;

    constructor(pConsigna: string, pOpciones: String[], pOpcionCorrecta: number, pPuntaje: number) {
        this.consigna = pConsigna;
        this.opciones = pOpciones;
        this.opcionCorrecta = pOpcionCorrecta;
        this.puntaje = pPuntaje;
    }

    public pregunta(consigna: string, puntaje: number): any {
        console.log(`La pregunta es ${consigna} y el vale ${puntaje} puntos`);
    }

    public addOpcion(opcion: String): void {
        this.opciones.push(opcion);
    }

    public setOpcionCorrecta(opcionCorrecta: number): void {
        this.opcionCorrecta = opcionCorrecta;
    }

    public esCorrecta(respuesta: number): boolean {
        if (respuesta === this.opcionCorrecta) {
            return true;
        } else {
            return false;
        }
    }

    public getPuntaje(): number {
        return this.puntaje;
    }
}