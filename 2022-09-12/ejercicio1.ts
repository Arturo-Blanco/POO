class Student {
    private name:string;
    private surname:string;
    private note:number;

    public constructor(pName:string, pSurname:string, pNote:number){
        this.name = pName;
        this.surname = pSurname;
        this.note = pNote;
    }
    public setNewStudent(newName:string, newSurname:string):void {
        this.name = newName;
        this.surname = newSurname;
    }
    public setStudentNote(newNote:number):void {
        this.note = newNote;
    }
    public getNameStudent():string {
        return this.name + ' ' + this.surname;
    }
    public getStudentNote():number {
        return this.note;
    }
}
class EducationSystem {
    private studentList:Student[];
    public constructor(pStudent:Student[]) {
        this.studentList=pStudent;
    }
    public searcApprovStudent(pStudent:Student): void {
        let noteStudent = pStudent.getStudentNote();
        let nameStudent = pStudent.getNameStudent()
            if(noteStudent>= 7) {
                console.log('El alumno '+nameStudent+' aprobó, su nota es '+noteStudent);
            }
            else {
                console.log('El alumno '+nameStudent+' desaprobó, su nota es '+noteStudent);
                
            }
        }
    }
let student1= new Student('Juan','Rodriguez',9);
let student2= new Student('Jose','Frias',6);
let student3= new Student('Maria','Gutierrez',7);
let student4= new Student('Leandro','Fernandez',2);
let student5= new Student('Ana','Lencina',10);


let studentList: Student[] = [student1, student2, student3] ;
let registerStudents = new EducationSystem(studentList);
let registerApprov = registerStudents.searcApprovStudent(student2);