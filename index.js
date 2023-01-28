const Employee = require('./lib/employee')
const inquirer =  require('inquirer')
const fs = require('fs')

function createNewEmployee() {
    inquirer
    .prompt([
        {
            // Get employee name
            type: 'input',
            message: "What is the employee's name?",
            name: 'employeeName',
        },
        {
            // Get employee ID
            type: 'input',
            message: "What is the employee's ID?",
            name: 'employeeID',
        },
        {
            // Get employee email
            type: 'input',
            message: "What is the employee's email?",
            name: 'employeeEmail',
        },
        {
            // Get employee role
            type: 'input',
            message: "What is the employee's role?",
            name: 'employeeRole',
        }
       
    ])
    .then((answers)=>{
     // Write response to file  
        employeeName = answers.employeeName;
        const employeeName = new Employee(answers.employeeName, answers.employeeID, answers.employeeEmail, answers.employeeRole)
    }
    )
}

createNewEmployee()
