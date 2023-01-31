const Engineer = require('../lib/engineer')

describe("Engineer", () => {
    let m = new Engineer('Sam', '123', 'Sam@test', 'Engineer', `exGitHub`);
    
    describe("class", () => {
        it("Should save the user's input", () => {
            expect (m.name).toBe('Sam');
            expect (m.id).toBe('123');
            expect (m.email).toBe('Sam@test');
            expect (m.role).toBe('Engineer')
            expect (m.github).toBe('exGitHub')
        })
    })

    describe("functions", () => {
        describe("getName", () => {
            it("Should return the employee's name", () => {
                expect (m.getName()).toBe('Sam')
            })
        })
        describe("getID", () => {
            it("Should return the employee's ID", () => {
                expect (m.getID()).toBe('123')
            })
        })
        describe("getEmail", () => {
            it("Should return the employee's email", () => {
                expect (m.getEmail()).toBe('Sam@test')
            })
        })
        describe("getRole", () => {
            it("Should return the employee's role", () => {
                expect (m.getRole()).toBe('Engineer')
            })
        })
        describe("getGithub", () => {
            it("Should return the engineer's Github", () => {
                expect (m.getGithub()).toBe('exGitHub')
            })
        })
    }) 
})
