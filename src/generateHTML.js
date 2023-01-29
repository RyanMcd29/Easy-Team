const Employee = require('../lib/employee')
const Manager = require('../lib/manager')
const Engineer = require('../lib/engineer')
const Intern = require('../lib/intern')

function generateCard(myTeam) {
    myTeam.forEach(employee => {
       console.log(employee.getRole())
    })

    // console.log(Employee.getName())
}

function generateHeading(myTeam) {

};

function generateHTML(myTeam) {
    generateHeading(myTeam)
    generateCard(myTeam)    
}



module.exports = generateHTML