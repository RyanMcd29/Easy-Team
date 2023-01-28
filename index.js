// const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const inquirer =  require('inquirer')
const fs = require('fs')

function getEmployeeRoleDetails(answers) {
    console.log(answers)
    switch(answers.employeeRole) {
        

        case 'Manager':
            inquirer
            .prompt([
                {
                    type: 'input',
                    message: "What is this manager's office number?",
                    name: 'managerOffice',
                }
            ])
            .then((managerAnswer)=>{
                answers.push(managerAnswer)
                console.log(answers)
            })
            
        break
    
    }
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
        console.log(manager)
    })
}


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
            type: 'rawlist',
            message: "What is the employee's role?",
            name: 'employeeRole',
            choices: [ 'Manager', 'Engineer', 'Intern' ],
        }
       
    ])
    .then((answers)=>{
      getEmployeeRoleDetails(answers)
    // Write response to employee class 

    // answers.employeeName = new Employee(answers.employeeName, answers.employeeID, answers.employeeEmail, answers.employeeRole)
    }

    

    )
  
}

createManager()
