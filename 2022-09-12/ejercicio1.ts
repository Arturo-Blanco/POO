class Student {
    private name:string;
    private surname:string;
    private note1:number;
    private note2:number;
    private note3:number;

    public constructor(pName:string,pSurname:string,pNote1:number,pNote2:number,pNote3:number){
        this.name = pName;
        this.surname = pSurname;
        this.note1 = pNote1;
        this.note2 = pNote2;
        this.note3 = pNote3;

    }
    public setStudent(newName:string,newSurname:string):void {
        this.name = newName;
        this.surname = newSurname;
    }
    public setStudentNote(newNote:number):void {
        this.note1 = newNote;
    }
    public getNameStudent():string {
        return this.name + ' ' +this.surname;
    }
    public getStudentNote():number {
        return this.note1+this.note2+this.note3;
    }
}
class Teacher {
    private nameTeacher:string;
    private sunameTeacher:string;
    private assignatureTeacher:string;
    private studentList:Student[];
    
    public constructor(pNameTeacher:string,psurnameTeacher:string, pAssignatureTeacher:string,pStudent:Student[]) {
        this.studentList=pStudent;
        this.nameTeacher=pNameTeacher;
        this.sunameTeacher=psurnameTeacher;
        this.assignatureTeacher=pAssignatureTeacher;
    }
    public setTeacher(newTeacher:string):void {
        this.nameTeacher=newTeacher;
    }
    public getTeacher():string {
        return this.nameTeacher+''+this.sunameTeacher+''+this.assignatureTeacher;
    }
    public searcApprovStudent(pStudent:Student):void {
        let averageStudent;
        let noteStudent = pStudent.getStudentNote();
        let nameStudent = pStudent.getNameStudent();
        averageStudent = (noteStudent/3).toFixed(2)
        
        if(averageStudent >= 7) {
            console.log(`El alumno ${nameStudent} aprobó, su promedio de notas es un ${averageStudent}.`);
        }
        else {
            console.log(`El alumno ${nameStudent} desaprobó, su promedio de notas es un ${averageStudent}.`);
        }
        return averageStudent;
    }
    public noteTeacher(): number{
        let notes: number=0;
        for(let i: number=0;i<this.studentList.length; i++) {
        notes += (this.studentList[i].getStudentNote())/3;
        }
        console.log('El promedio de  ');
        
        return notes / studentList.length;
        } 
}
    class Colege {
    }
        
let student1= new Student('Juan','Rodriguez',9,7,5);
let student2= new Student('Jose','Frias',6,9,5);
let student3= new Student('Maria','Gutierrez',7,7,8);
let student4= new Student('Leandro','Fernandez',2,10,5);
let student5= new Student('Ana','Lencina',10,7,8);

let studentList: Student[] = [student1,student2,student3,student4,student5] ;
let registerStudents = new Teacher('Hernan','Ibarra','Matematica',studentList);
let registerApprov = registerStudents.searcApprovStudent(student3);
let aprovTeacher=registerStudents.noteTeacher();
console.log(aprovTeacher);
