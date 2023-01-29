// const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const inquirer =  require('inquirer')
const fs = require('fs')

const managerArr = []
const engineerArr = []
const internArr = []

function writeToFile() {
    fileName = `${managerArr[0].name}'s-Team.html`
    // Make copy of template
    fs.copyFile('./src/template.html', `./dist/${fileName}`, (err) => {
        if (err) {
            console.log("Error found:", err)
        }
    })

}

function inputNextEmployee() {
    inquirer
    .prompt([
        {
            // Choose next input
            type: 'rawlist',
            message: "Would you like to add another employee?",
            name: 'addEmployeeType',
            choices: [  'Engineer', 'Intern', 'I am done adding employees'
             ],
        },
    ])
    .then((answers)=>{
        switch (answers.addEmployeeType){
            case 'Engineer':
                createNewEmgineer()
            break;
            case 'Intern':
                createNewIntern()
            break
            case 'I am done adding employees':
                writeToFile()
                console.log(managerArr)
                console.log(engineerArr)
                console.log(internArr)
            break
        }          
    })
}

function createManager() {
    inquirer
    .prompt([
        {
            // Get employee name
            type: 'input',
            message: "What is the Manager's name?",
            name: 'name',
        },
        {
            // Get employee ID
            type: 'input',
            message: "What is the their ID?",
            name: 'ID',
        },
        {
            // Get employee email
            type: 'input',
            message: "What is their email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is their office number?",
            name: 'office',
        }

       
    ])
    .then((answers)=>{
        const manager = new Manager(answers.name, answers.ID, answers.email, 'Manager', answers.office)
        managerArr.push(manager)
        console.log(manager)
        inputNextEmployee()
    })
}

function createNewEmgineer() {
    inquirer
    .prompt([
        {
            // Get employee name
            type: 'input',
            message: "What is this employee's name?",
            name: 'Name',
        },
        {
            // Get employee ID
            type: 'input',
            message: "What is their ID?",
            name: 'ID',
        },
        {
            // Get employee email
            type: 'input',
            message: "What is their email?",
            name: 'email',
        },
        {
            // Get engineer github
            type: 'input',
            message: "What is their Github username?",
            name: 'github',
        },
     
    ])
    .then((answers)=>{
    // Write response to employee class 
        const engineer = new Engineer(answers.name, answers.ID, answers.email, answers.github)
        engineerArr.push(engineer)
        inputNextEmployee()
    })
}

function createNewIntern() {
    inquirer
    .prompt([
        {
            // Get employee name
            type: 'input',
            message: "What is this employee's name?",
            name: 'Name',
        },
        {
            // Get employee ID
            type: 'input',
            message: "What is their ID?",
            name: 'ID',
        },
        {
            // Get employee email
            type: 'input',
            message: "What is their email?",
            name: 'email',
        },
        {
            // Get engineer github
            type: 'input',
            message: "What school is this intern from?",
            name: 'school',
        },
    ])
    .then((answers)=>{
    // Write response to employee class 
        const intern = new Intern(answers.name, answers.ID, answers.email, answers.school)
        internArr.push(intern)
        inputNextEmployee()
    })
}


createManager()
