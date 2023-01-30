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
    let name = myTeam[0].getName()
    return `${name}'s Team`
}

function generateHTML(myTeam) {
    heading = generateHeading(myTeam)
    myTeam.forEach(employee => {
        teamHTML.push(generateCard(employee))
    })
    teamHTML = teamHTML.toString();
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">  
      <title>${heading}</title>
    </head>
    
    <body>
        <header class="d-flex text-bg-danger justify-content-center">
          <nav>
            <h1 class="navbar p-5">${heading}</h1>
          </nav>
        </header>
       
        <section class ="container d-flex justify-content-center my-5">
          ${teamHTML}
      </section>
    </body>`
}



module.exports = generateHTML