const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const inquirer =  require('inquirer')
const generateHTML = require('./src/generateHTML')
const fs = require('fs')

const myTeam = []

function validateEmail(email) {
    if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)) {
        return true
    } else {
        console.log(', please enter a valid Email')
        return false
    } 
}

function writeToFile() {
    fileName = `${myTeam[0].name}'s-Team.html`
    // Make copy of template
    fs.writeFile(`./dist/${fileName}`, generateHTML(myTeam), (err) => {
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
            validate: function(email){
                return validateEmail(email)
            },

        },
        {
            type: 'input',
            message: "What is their office number?",
            name: 'office',
        }

       
    ])
    .then((answers)=>{
        const manager = new Manager(answers.name, answers.ID, answers.email, 'Manager', answers.office)
        myTeam.push(manager)
        inputNextEmployee()
    })
}

function createNewEmgineer() {
    inquirer
    .prompt([
        {
            // Get employee name
            type: 'input',
            message: "What is this engineer's name?",
            name: 'name',
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
            validate: function(email){
                return validateEmail(email)
            },
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
        const engineer = new Engineer(answers.name, answers.ID, answers.email, 'Engineer', answers.github)
        myTeam.push(engineer)
        
        inputNextEmployee()
    })
}

function createNewIntern() {
    inquirer
    .prompt([
        {
            // Get employee name
            type: 'input',
            message: "What is this intern's name?",
            name: 'name',
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
            validate: function(email){
                return validateEmail(email)
            },
        },
        {
            // Get intern school
            type: 'input',
            message: "What school is this intern from?",
            name: 'school',
        },
    ])
    .then((answers)=>{
    // Write response to employee class 
        const intern = new Intern(answers.name, answers.ID, answers.email, 'Intern', answers.school)
        myTeam.push(intern)
        inputNextEmployee()
    })
}


createManager()
