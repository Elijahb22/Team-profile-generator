

const manager= require ('../lib/Manager');

//name, email, id, role and school  name validation for manager
    test('has a name', () => {
        const managerTest = new manager('Elijah', 'Elijahbusick@gmail.com', 4 , 'manager', 109);
        expect(managerTest.name).toEqual(expect.any(String))
        expect(managerTest.name.length).toBeGreaterThan(2)
    })

    test('has an email id', () =>{
        const managerTest = new manager('Elijah', 'Elijahbusick@gmail.com', 4 , 'manager', 109);
        expect(managerTest.email).toEqual(expect.stringContaining('@'))
    })

    test('has an id that is a num', () => {
        const managerTest = new manager('Elijah', 'Elijahbusick@gmail.com', 4 , 'manager', 109);
        expect(managerTest.id).toEqual(expect.any(Number))
    })

    test('has a role of manager', () => {
        const managerTest = new manager('Elijah', 'Elijahbusick@gmail.com', 4 , 'manager', 109);
        expect(managerTest.role).toBe('manager')
    });

    it('has a office number', () => {
        const managerTest = new manager('Elijah', 'Elijahbusick@gmail.com', 4 , 'manager', 109);
        keys = Object.keys(managerTest)
        optionKey = keys[4]
        expect(optionKey).toBe('office')
        expect(managerTest.office).toEqual(expect.any(Number))
    })