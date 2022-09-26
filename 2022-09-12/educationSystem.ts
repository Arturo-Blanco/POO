class Student {
    private name:string;
    private surname:string;
    private mathNote:number;
    private pshysicsNote:number;
    private philosophyNote:number;

    public constructor(pName:string,pSurname:string,pMathNote:number,pPshysicsNote:number,pPhilosophyNote:number){
        this.name = pName;
        this.surname = pSurname;
        this.mathNote=pMathNote;
        this.pshysicsNote=pPshysicsNote;
        this.philosophyNote=pPhilosophyNote;
    }
    public setStudent(newName:string,newSurname:string):void {
        this.name=newName;
        this.surname=newSurname;
    }
    public getStudentName():string{
        return this.name + ' ' +this.surname;
    }
    public setMathNote(pMathNote:number):void {
        this.mathNote=pMathNote;
    }
    public setPshysicsNote(pPshysicsNote:number):void {
        this.pshysicsNote=pPshysicsNote;
    }
    public setPhilosophyNote(pPhilosophyNote:number):void {
        this.philosophyNote=pPhilosophyNote;
    }
    /* funcion para que el alumno pueda consultar su nota en las materias que esta enrrolado */
    public getStudentNote(assignature:string):string{
        if(assignature==='Matematica'){
                if(this.mathNote>=7) {
            return `${this.getStudentName()} aprobó ${assignature} con un ${this.mathNote}.`;
        } else {
            return `${this.getStudentName()} desaprobó ${assignature} con un ${this.mathNote}.`;
            }
        }
        if(assignature==='Fisica'){
                if(this.pshysicsNote>=7) {
            return `${this.getStudentName()} aprobó ${assignature} con un ${this.pshysicsNote}.`;
        } else {
            return `${this.getStudentName()} desaprobó ${assignature} con un ${this.pshysicsNote}.`;
            }
        }
        if(assignature==='Filosofia') {
                if(this.philosophyNote>=7) {
            return `${this.getStudentName()} aprobó ${assignature} con un ${this.philosophyNote}.`;
        } else {
            return `${this.getStudentName()} desaprobó ${assignature} con un ${this.philosophyNote}.`;
            }
        }
        if(assignature===undefined) {
            return `${this.getStudentName()} ingrese una materia para saber su nota.`;
        }
        else {
            return `${this.getStudentName()} no esta matriculado en la materia que busca, ingrese una materia valida.`;
        }
    }
}
class Teacher {
    private nameTeacher:string;
    private surnameTeacher:string;
    private assignatureTeacher:string;
    private studentList:Student[];
    
    public constructor(pNameTeacher:string,psurnameTeacher:string,pAssignatureTeacher:string,pStudent:Student[]) {
        this.studentList=pStudent;
        this.nameTeacher=pNameTeacher;
        this.surnameTeacher=psurnameTeacher;
        this.assignatureTeacher=pAssignatureTeacher;
    }
    public setTeacher(pNameTeacher:string,psurnameTeacher:string,pAssignatureTeacher:string):void {
        this.nameTeacher=pNameTeacher;
        this.surnameTeacher=psurnameTeacher;
        this.assignatureTeacher=pAssignatureTeacher;
    }
    public getTeacher():string {
        return `${this.surnameTeacher} ${this.nameTeacher}, asignatura ${this.assignatureTeacher}.`;
    }
}
class College {
    private collegeName:string;
    private teacherList:Teacher[];
    private studentList:Student[];

    public constructor(pCollegeName:string,pTeacherList:Teacher[],pStudentList:Student[]){
    this.collegeName=pCollegeName;
    this.teacherList=pTeacherList;
    this.studentList=pStudentList;
    }
    public getCollegeName():string{
        return this.collegeName;
    }
    public setCollegeName(newCollegeName:string):void{
        this.collegeName=newCollegeName;
    }
    /* funcion para que el colegio pueda contratar a un nuevo profesor y asignarle sus alumnos */
    public hireNewTeacher(pName:string,pSurname:string,pAssignature:string):void{
        let newTeacher=new Teacher(pName,pSurname,pAssignature,studentList); 
        this.teacherList.push(newTeacher);
        console.log(`Se ah contratado al profesor ${pName+' '+pSurname} que se desempeña en la asignatura ${pAssignature}.`);
        //return newTeacher;
    }
    /* funcion para que el colegio pueda despedir a un profesor*/
    public fireTeacher(pTeacher:Teacher):void{
        for(let i= 0;i<this.teacherList.length;i++) {
            if(pTeacher.getTeacher()===this.teacherList[i].getTeacher()){
                this.teacherList.splice(i,1);
                    console.log(`El profesor ${pTeacher.getTeacher()} Ah sido despedido.`);
        }
    }
}
    /* funcion para que el colegio pueda matricular a un nuevo alumno*/
    public enrollStudent(pName:string,pSurname:string):void{
        let newStudent=new Student(pName,pSurname,0,0,0)
        this.studentList.push(newStudent);
        console.log(`Se ah matriculado al alumno ${pName+' '+pSurname}.`);
       // return newStudent
    }
    /* funcion para que el colegio pueda remover a un alumno*/
    public removeStudent(pName:Student):void{
        for(let i:number=0;i<this.studentList.length;i++){
            if(pName.getStudentName() === this.studentList[i].getStudentName()){
                this.studentList.splice(i,1);
            }
        } console.log(`El alumno ${pName.getStudentName()} ah sido removido de la institución.`);
    }
}

    /* Listado de alumnos matriculados */

let student1=new Student('Juan','Rodriguez',9,7,5);
let student2=new Student('Jose','Frias',6,9,5);
let student3=new Student('Maria','Gutierrez',7,7,8);
let student4=new Student('Leandro','Fernandez',2,10,5);
let student5=new Student('Ana','Lencina',10,7,8);
let studentList:Student[]=[student1,student2,student3,student4,student5] ;

    /* Listado de profesores activos */

let mathTeacher=new Teacher('Hernan','Ibarra','Matemática',studentList);
let philosophyTeacher=new Teacher('Salvador','Flores','Filosofia',studentList);
let pshysicTeacher=new Teacher('Mirta','Salvattori','Fisica',studentList);
let teacherList:Teacher[]=[philosophyTeacher,mathTeacher,pshysicTeacher];

    /*Colegio */

let college=new College('San Martin',teacherList,studentList); 
let scienceTeacher=college.hireNewTeacher('Juan','Rodriguez','Ciencia'); /*Se crea un nuevo objeto Teacher*/
let student6=college.enrollStudent('Juan','Blanco'); /*Se crea un nuevo objeto Student*/

    /*Se prueban las instancias de cada objeto */

console.log(student3.getStudentNote('Matematica')); /*se toma las notas de un alumno*/
console.log(teacherList);/*Se verifica si el nuevo objeto teacher se incorporo a la lista teacherList*/
console.log(studentList);/*Se verifica si el nuevo objeto student se incorporo a la lista studentList*/
college.removeStudent(student1)
console.log(studentList.length); /*se verifica si se elimino el objeto student*/
college.fireTeacher(mathTeacher); /*se despide al profesor de matematica*/
console.log(teacherList.length); /*se verifica si el objeto teacher se elimino de la lista teacherList*/

