const Manager = require('../lib/manager')

describe("Manager", () => {
    let m = new Manager('Alfred', '932', 'Alfred@test', 'Manager', `12`);
    
    describe("class", () => {
        it("Should save the user's input", () => {
            expect (m.name).toBe('Alfred');
            expect (m.id).toBe('932');
            expect (m.email).toBe('Alfred@test');
            expect (m.role).toBe('Manager')
            expect (m.officeNumber).toBe('12')
        })
    })

    describe("functions", () => {
        describe("getName", () => {
            it("Should return the employee's name", () => {
                expect (m.getName()).toBe('Alfred')
            })
        })
        describe("getID", () => {
            it("Should return the employee's ID", () => {
                expect (m.getID()).toBe('932')
            })
        })
        describe("getEmail", () => {
            it("Should return the employee's email", () => {
                expect (m.getEmail()).toBe('Alfred@test')
            })
        })
        describe("getRole", () => {
            it("Should return the employee's role", () => {
                expect (m.getRole()).toBe('Manager')
            })
        })
        describe("getSchool", () => {
            it("Should return the employee's role", () => {
                expect (m.getSchool()).toBe('12')
            })
        })
    }) 
})
