const Employee = require('../lib/employee')
const Manager = require('../lib/manager')
const Engineer = require('../lib/engineer')
const Intern = require('../lib/intern')

var teamHTML = []

function addManager(employee) {
    let name = employee.getName()
    let ID = employee.getID()
    let email = employee.getEmail()
    let officeNumber = employee.getOffice()

    return `
    <div class="card mb-3" style="width: 18rem;">
    <div class="text-bg-primary">
      <h3 class="card-title px-4 pt-4">${name}</h3>
      <h4 class="card-title px-4 py-0">💼 Manager</h4>

    </div>

    <div class="card-body text-bg-light">
        <ul class="m-3 list-group list-group-flush">
            <li class="list-group-item">ID: ${ID}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">Office Number: ${officeNumber}</li>
        </ul>
    </div>`
}

function addEngineer(employee) {
    let name = employee.getName()
    let ID = employee.getID()
    let email = employee.getEmail()
    let github = employee.getGithub()

    return `
    <div class="card mb-3" style="width: 18rem;">
    <div class="text-bg-primary">
      <h3 class="card-title px-4 pt-4">${name}</h3>
      <h4 class="card-title px-4 py-0">🧰 Engineer</h4>

    </div>

    <div class="card-body text-bg-light">
        <ul class="m-3 list-group list-group-flush">
            <li class="list-group-item">ID: ${ID}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">GitHub: <a href="www.github.com/${github}>${github}</a></li>
        </ul>
    </div>`
}

function addIntern(employee) {
    let name = employee.getName()
    let ID = employee.getID()
    let email = employee.getEmail()
    let school = employee.getSchool()

    return `
    <div class="card mb-3" style="width: 18rem;">
    <div class="text-bg-primary">
      <h3 class="card-title px-4 pt-4">${name}</h3>
      <h4 class="card-title px-4 py-0">🎓 Intern</h4>

    </div>

    <div class="card-body text-bg-light">
        <ul class="m-3 list-group list-group-flush">
            <li class="list-group-item">ID: ${ID}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">School: ${school}</li>
        </ul>
    </div>`
}

function generateCard(employee) {       
        switch (employee.getRole()) {
        case 'Manager':
            return addManager(employee)
        case 'Engineer':
            return addEngineer(employee)
        case'Intern':
            return addIntern(employee)
       }
    }


function generateHeading(myTeam) {
}

function generateHTML(myTeam) {
    heading = generateHeading(myTeam)
    myTeam.forEach(employee => {
        teamHTML.push(generateCard(employee))
    })
    console.log(teamHTML.toString());
     
}



module.exports = generateHTML