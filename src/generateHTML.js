const Employee = require('../lib/employee')
const Manager = require('../lib/manager')
const Engineer = require('../lib/engineer')
const Intern = require('../lib/intern')

var teamHTML = []

function addManager(employee) {
    let name = employee.getName()
    let role = employee.getRole()
    let ID = employee.getID()
    let email = employee.getEmail()
    let officeNumber = employee.getOffice()

    return `
<div class="card" style="width: 18rem;">

    <div class="card-header">${name}</div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${ID}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">Office Number: ${officeNumber}</li>
         </ul>
    </div>
</div>`
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
        teamHTML.push(generateCard(employee))
    })
    console.log(teamHTML); 
}



module.exports = generateHTML