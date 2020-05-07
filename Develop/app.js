const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const mgrQuestion = 
[
    {
        type: "input", 
        name: "name", 
        message: "Enter the employee's name."
    }, 
    {
        type: "input", 
        name: "id", 
        message: "Enter the employee's ID."
    }, 
    {
        type: "input", 
        name: "email", 
        message: "Enter the employee's email."
    },
    {
        type: "input", 
        name: "officeNumber", 
        message: "Enter the manager's office number."
    }
];

const engineerQuestion = 
[
    {
        type: "input", 
        name: "name", 
        message: "Enter the employee's name."
    }, 
    {
        type: "input", 
        name: "id", 
        message: "Enter the employee's ID."
    }, 
    {
        type: "input", 
        name: "email", 
        message: "Enter the employee's email."
    },
    {
        type: "input", 
        name: "github", 
        message: "Enter the engineer's GitHub username."
    }
]; 

const internQuestion = 
[
    {
        type: "input", 
        name: "name", 
        message: "Enter the employee's name."
    }, 
    {
        type: "input", 
        name: "id", 
        message: "Enter the employee's ID."
    }, 
    {
        type: "input", 
        name: "email", 
        message: "Enter the employee's email."
    },
    {
        type: "input", 
        name: "school", 
        message: "Enter the intern's school name."
    }
]; 

const roleQuestion = 
[
    {
        type: "list", 
        name: "role", 
        message: "Choose the employee's role type.",
        choices: ["Engineer", "Intern"]
    }
]; 

const addTeamMemberQuestion = 
[
    {
        type: "confirm", 
        name: "addEmployee", 
        message: "Would you like to add a team member?",
        default: true
    }
]; 

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

getMgrInfo(); 

async function getMgrInfo() {
    try {
        await inquirer.prompt(mgrQuestion).then(function createMgr (answers) {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber); 
            console.log(manager); 
            console.log("Generated manager object successfully!");  
        })
    }
    catch (err) {
    console.log(err)
    }
    decideToAddProfile();
};

async function decideToAddProfile() {
    try {
        await inquirer.prompt(addTeamMemberQuestion).then(function askRole(answers) {
            if (answers.addEmployee) {
                inquirer.prompt(roleQuestion);
            }
            if (answers.addEmployee == false) {
                render();
            }
        })
    } 
    catch (err) {
        console.log(err);
    }
};

async function addEngineer() {

}

async function addInter() {
    
}

function collectRoleType(addEmployees) {
    if (addEmployees == true) {
        inquirer.prompt([
            {
                type: "list", 
                name: "role", 
                message: "Choose the employee's role type.",
                choices: ["Engineer", "Intern"]
            }
        ]) 
    }
    else {
       //stop prompts and create HTML file  
    }
}; 

function collectEngineerInfo() {
}; 

function collectInternInfo() {
}; 




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// const employeeQuestions =
// [
//     {
//         type: "input", 
//         name: "name", 
//         message: "Enter the employee's name."
//     }, 
//     {
//         type: "input", 
//         name: "id", 
//         message: "Enter the employee's ID."
//     }, 
//     {
//         type: "input", 
//         name: "email", 
//         message: "Enter the employee's email."
//     }
// ]; 



// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```