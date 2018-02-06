var Student = require("./student.js");
var inquirer = require("inquirer");
var classes =[];
var numClasses = 0;

function Class (nameProfessor, roomNumber) {
    this.studentArray = [];
    this.numStudents = 0;
    this.nameProfessor = nameProfessor;
    this.roomNumber = roomNumber;
    this.addStudent = function(name, subject, gpa) {
        var student = new Student(name, subject, gpa);
        this.studentArray.push(student);
        numStudents++;
    };
}

createClass();

function createClass() {
    console.log("Create a class!");
    inquirer.prompt([
        {
            name: "professor",
            message: "What is the professor's name?"
        },
        {
            name: "room",
            message: "What is the room number?"
        }
    ]).then(function(answers) {
        var newClass = new Class(answers.professor, answers.room);
        classes.push(newClass);
        numClasses++;
    });
    askQuestion();
}
function askQuestion() {
    console.log("Add students to a class!");
    inquirer.prompt([
        {
            name: "class",
            message: "Which class would you like to add a student to?"
        },
        {
            name: "name",
            message: "What is the student's name?"
        },
        {
            name: "subject",
            message: "What is the student's favorite subject?"
        },
        {
            name: "gpa",
            message: "What is the student's GPA?"
        }
    ]).then(function(answers) {
        answers.class.addStudent(answers.name, answers.subject, answers.gpa);
    });
}

