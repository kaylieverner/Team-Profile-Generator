// // TODO: Write code to define and export the Employee class
// The first class is an `Employee` parent class with the following properties and
// methods:

//   * name
//   * id
//   * email
//   * getName()
//   * getId()
//   * getEmail()
//   * getRole() // Returns 'Employee'
const inquirer = require("inquirer"); 

class Employee {
    constructor(name, id, email) {
        this.name = name; 
        this.id = id; 
        this.email = email; 
    }

    getName(name) {
        return this.name;
        // inquirer.prompt([{
        //     type: "input", 
        //     name: "name", 
        //     message: "Enter the employee's name."
        // }])
        // console.log(name);
    }

    getId(id) {
        return this.id;
        // inquirer.prompt([{
        //     type: "input", 
        //     name: "id", 
        //     message: "Enter the employee's id."
        // }])
        // console.log(id);
    }

    getEmail(email) {
        return this.email;
        // inquirer.prompt([{
        //     type: "input", 
        //     name: "email", 
        //     message: "Enter the employee's email."
        // }])
        // console.log(email);
    }

    getRole() {
        var obj = new Employee(); 
        return obj.constructor.name; 
    }
}

module.exports = Employee;