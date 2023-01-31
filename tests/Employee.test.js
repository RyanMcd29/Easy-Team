const Employee = require('../lib/employee')

describe("employee", () => {
    let e = new Employee('John', '312', 'test@email', 'Manager');
    
    describe("class", () => {
        it("Should save the user's input", () => {
            expect (e.name).toBe('John');
            expect (e.id).toBe('312');
            expect (e.email).toBe('test@email');
            expect (e.role).toBe('Manager')
        })
    })

    describe("functions", () => {
        describe("getName", () => {
            it("Should return the employee's name", () => {
                expect (e.getName()).toBe('John')
            })
        })
        describe("getID", () => {
            it("Should return the employee's ID", () => {
                expect (e.getID()).toBe('312')
            })
        })
        describe("getEmail", () => {
            it("Should return the employee's email", () => {
                expect (e.getEmail()).toBe('test@email')
            })
        })
        describe("getRole", () => {
            it("Should return the employee's role", () => {
                expect (e.getRole()).toBe('Employee')
            })
        })
    }) 
})
