class employee {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;   
    }

    getName() {
        return this.name;
    }
    getEmail() {
    
        return this.email;
    }
    getID() {
        return this.id;
    }

    getRole(){
        return this.role;
    }
}
module.exports = employee;