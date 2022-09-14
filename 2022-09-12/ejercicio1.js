var Student = /** @class */ (function () {
    function Student(pName, pSurname, pNote) {
        this.name = pName;
        this.surname = pSurname;
        this.note = pNote;
    }
    Student.prototype.setNewStudent = function (newName, newSurname) {
        this.name = newName;
        this.surname = newSurname;
    };
    Student.prototype.setStudentNote = function (newNote) {
        this.note = newNote;
    };
    Student.prototype.getNameStudent = function () {
        return this.name + ' ' + this.surname;
    };
    Student.prototype.getStudentNote = function () {
        return this.note;
    };
    return Student;
}());
var EducationSystem = /** @class */ (function () {
    function EducationSystem(pStudent) {
        this.studentList = pStudent;
    }
    EducationSystem.prototype.searcApprovStudent = function (pStudent) {
        var noteStudent = pStudent.getStudentNote();
        var nameStudent = pStudent.getNameStudent();
        if (noteStudent >= 7) {
            console.log('El alumno ' + nameStudent + ' aprobó, su nota es ' + noteStudent);
        }
        else {
            console.log('El alumno ' + nameStudent + ' desaprobó, su nota es ' + noteStudent);
        }
    };
    return EducationSystem;
}());
var student1 = new Student('Juan', 'Rodriguez', 9);
var student2 = new Student('Jose', 'Frias', 6);
var student3 = new Student('Maria', 'Gutierrez', 7);
var student4 = new Student('Leandro', 'Fernandez', 2);
var student5 = new Student('Ana', 'Lencina', 10);
var studentList = [student1, student2, student3];
var registerStudents = new EducationSystem(studentList);
var registerApprov = registerStudents.searcApprovStudent(student2);
