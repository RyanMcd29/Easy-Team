const Employee = require('../lib/employee')
const Manager = require('../lib/manager')
const Engineer = require('../lib/engineer')
const Intern = require('../lib/intern')

function addManager(employee) {
    let name = employee.getName()
    let ID = employee.getID()
    let email = employee.getEmail()
}

function generateCard(employee) {       
        switch (employee.getRole()) {
        case 'Manager':
            return addManager(employee)
        case 'Enginer':
            return addEngineer(employee)
        case'Intern':
            return addIntern(employee)
       }
    }


function generateHeading(myTeam) {
}

function generateHTML(myTeam) {
    generateHeading(myTeam)
    myTeam.forEach(employee => {
        generateCard(employee)
    }); 
}



module.exports = generateHTML