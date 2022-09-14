class SistemaEducativo {
    private colegio: string;
    private profesor: string;
    private alumnos: Alumno[];

    public constructor(pColegio: string, pProfesor: string, pAlumnos: Alumno[]) {
        this.colegio= pColegio;
        this.profesor=pProfesor;
        this.alumnos= pAlumnos;
    }
    public newProfesor(): string {
        return this.profesor;
    }
    public newColegio(): string {
        return this.colegio;
    }
    public newAlumnos(): void {
        this.alumnos;
    }
    public getDatoAlumno(): void {
        return 
    }
}
class Alumno {
    private nombre: string;
    private apellido: string;
    private nota:number;
    public constructor(pNombre: string, pApellido:string, pNota:number){
        this.nombre=pNombre;
        this.apellido=pApellido;
        this.nota= pNota;
    }
/*    public setAlumno(nuevoNombre: string, nuevoApellido: string, nuevaNota: number): void {
        this.nombre = nuevoNombre;
        this.apellido = nuevoApellido;
        this.nota = nuevaNota;
    }*/

    public newAlumno(): any {
        return this.nombre + ' ' + this.apellido+' '+ this.nota;
    }
 /*   public getNota(): void {
        if(this.nota >= 7) {
    console.log('El alumno aprobo');
        }
        else {
    console.log('El alumno desaprobo');
    return
        }
    }*/
}
let alumnos: Alumno[] = [
    new Alumno('Juan','Blanco','10')
];

let primero= Alumno[0];
console.log(primero);
