// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// officeNumber
// getRole()

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email); 
        this.officeNumber = officeNumber; 
    }

getRole() {
    var obj = new Manager(); 
    return obj.constructor.name; 
}

getOfficeNumber() {
    return this.officeNumber;
}
};

module.exports = Manager;