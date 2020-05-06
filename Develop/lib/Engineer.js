// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// * github  // GitHub username

//   * getGithub()

//   * getRole() // Overridden to return 'Engineer'


const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email); 
        this.github = github; 
    }

getRole() {
    var obj = new Engineer(); 
    return obj.constructor.name; 
}

getGithub() {
    return this.github;
}
};

module.exports = Engineer;
