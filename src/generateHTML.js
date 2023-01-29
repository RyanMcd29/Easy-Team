function generateCard(employee) {
    console.log(employee)
}

function generateHeading(myTeam) {

};

function generateHTML(myTeam) {
    generateHeading(myTeam)
    
    myTeam.forEach(employee =>
        generateCard(employee))     

    }
        


module.exports = generateHTML