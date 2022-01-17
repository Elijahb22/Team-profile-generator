const employee = require('../lib/employee')

test ('has a name', () => {
    const employeeTest = new employee ("Eli", "elijahbusick.work@gmail.com", 3 , "employee");
    expect(employeeTest.name).toEqual(expect.any(String))
    expect(employeeTest.name.length).toBeGreaterThan(2)
})

test ('has an email id', () => { 
    const employeeTest = new employee ("Eli", "elijahbusick.work@gmail.com", 3 , "employee");
    expect(employeeTest.email).toEqual(expect.stringContaining('@'))
})

test ('has an id that is a num', () => {
    const employeeTest = new employee ("Eli", "elijahbusick.work@gmail.com", 3 , "employee");
    expect(employeeTest.id).toEqual(expect.any(Number))
})

test ('has a role of employee', () => {
    const employeeTest = new employee ("Eli", "elijahbusick.work@gmail.com", 3 , "employee");
    expect(employeeTest.role).toBe('employee')
})