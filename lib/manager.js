
const employee = require ('./employee');

class manager extends employee {
    constructor (name, email, id, role, office){
        super (name, email, id, role)
        this.office = office;
    }

    getOfficeNo(){
        return this.office;
    }
}

module.exports = manager;
