const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = []; 

//functions to validate inputs of inquirer.prompt inputs
function validateName(name){
    return name !== '';
}; 

function validateID(id){
    return id !== ''; 
}; 

function validateEmail(email) {
    return email !== ''; 
};

function validateOfficeNum(officeNumber) {
    var reg = /^\d+$/;
    return reg.test(officeNumber) || "Office number should be a number.";
};

function validateGithub(github) {
    return github !== '';
};

function validateSchool(school) {
    return school !== ''; 
};

const mgrQuestion = 
[
    {
        type: "input", 
        name: "name", 
        message: "Enter the employee's name.",
        validate: validateName
    }, 
    {
        type: "input", 
        name: "id", 
        message: "Enter the employee's ID.",
        validate: validateID 
    }, 
    {
        type: "input", 
        name: "email", 
        message: "Enter the employee's email.", 
        validate: validateEmail
    },
    {
        type: "input", 
        name: "officeNumber", 
        message: "Enter the manager's office number.", 
        validate: validateOfficeNum
    }
];

const engineerQuestion = 
[
    {
        type: "input", 
        name: "name", 
        message: "Enter the employee's name.",
        validate: validateName
    }, 
    {
        type: "input", 
        name: "id", 
        message: "Enter the employee's ID.", 
        validate: validateID
    }, 
    {
        type: "input", 
        name: "email", 
        message: "Enter the employee's email.", 
        validate: validateEmail
    },
    {
        type: "input", 
        name: "github", 
        message: "Enter the engineer's GitHub username.", 
        validate: validateGithub
    }
]; 

const internQuestion = 
[
    {
        type: "input", 
        name: "name", 
        message: "Enter the employee's name.", 
        validate: validateName
    }, 
    {
        type: "input", 
        name: "id", 
        message: "Enter the employee's ID.", 
        validate: validateID
    }, 
    {
        type: "input", 
        name: "email", 
        message: "Enter the employee's email.", 
        validate: validateEmail
    },
    {
        type: "input", 
        name: "school", 
        message: "Enter the intern's school name.", 
        validate: validateSchool
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
            employees.push(manager); 
            // console.log(employees); 
            console.log("Generated manager object successfully!");  
        })
    }
    catch (err) {
    console.log(err)
    }
    await decideToAddProfile();
};

async function decideToAddProfile() {
    try {
        await inquirer.prompt(addTeamMemberQuestion).then(function useResponse(answers) {
            if (answers.addEmployee) {
                return inquirer.prompt(roleQuestion).then(async function addEngineerorIntern(answers) {
                    try {
                        if (answers.role == "Engineer") {
                            inquirer.prompt(engineerQuestion).then(function createEng (answers) {
                                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                                employees.push(engineer); 
                                // console.log(employees); 
                                console.log("Generated engineer object successfully!")
                                decideToAddProfile();
                            });
                        }
                        if (answers.role == "Intern") {
                            inquirer.prompt(internQuestion).then(function createIntern (answers) {
                                const intern = new Intern(answers.name, answers.id, answers.email, answers.school); 
                                employees.push(intern); 
                                // console.log(employees); 
                                console.log("Generated intern object successfully!")
                                decideToAddProfile();
                            });
                        }
                    }
                    catch (err) {
                        console.log(err);
                    }
                }); 
            }
            if (answers.addEmployee == false) {
                console.log("Rendering employees array."); 
                return createHTMLFile(); 
            }
        })
    } 
    catch (err) {
        console.log(err);
    } 
};

async function createHTMLFile() {
    fs.writeFile(outputPath, render(employees), function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      });
}; 