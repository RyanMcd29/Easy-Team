const Intern = require('../lib/intern')

describe("Intern", () => {
    let i = new Intern('Jane', '342', 'jane@test', 'Intern', `UWA`);
    
    describe("class", () => {
        it("Should save the user's input", () => {
            expect (i.name).toBe('Jane');
            expect (i.id).toBe('342');
            expect (i.email).toBe('jane@test');
            expect (i.role).toBe('Intern')
            expect (i.school).toBe('UWA')
        })
    })

    describe("functions", () => {
        describe("getName", () => {
            it("Should return the employee's name", () => {
                expect (i.getName()).toBe('Jane')
            })
        })
        describe("getID", () => {
            it("Should return the employee's ID", () => {
                expect (i.getID()).toBe('342')
            })
        })
        describe("getEmail", () => {
            it("Should return the employee's email", () => {
                expect (i.getEmail()).toBe('jane@test')
            })
        })
        describe("getRole", () => {
            it("Should return the employee's role", () => {
                expect (i.getRole()).toBe('Intern')
            })
        })
        describe("getSchool", () => {
            it("Should return the intern's school", () => {
                expect (i.getSchool()).toBe('UWA')
            })
        })
    }) 
})
