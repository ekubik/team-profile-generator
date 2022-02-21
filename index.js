
//import modules
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const jest = require("jest");
const {createTeam, generateManagerCard, generateInternCard, generateEngineerCard} = require("./src/generateHTML");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");

//array to hold completed team
const team = [];

//prompt questions for manager - first role, init function
function addManager() { inquirer.prompt([
  { name: "name", type: "input", message: "Please enter the manager's name." },
  { name: "id", type: "input", message: "Enter the manager's id." },
  { name: "officeNumber", type: "input", message: "Please enter the office number." },
  {
    name: "email",
    type: "input",
    message: "Please enter the manager's email address.",
  },
]).then( data => {
    const manager = new Manager (data.name, data.id, data.email, data.officeNumber);
    console.log(manager);
    //push member into team array
    team.push(manager);
    buildTeam();
})
};

//once manager has been completed, rest of user is prompted to enter remaining team members
function buildTeam(){ inquirer.prompt ([
    {name: "role",
    type: "list",
    message: "Please select the member that you would like to add to your team.",
    choices: ["Engineer", "Intern", "Finished adding members"]
    }
    //if user selects intern role, switches to intern questions
]).then(userChoice => {
    switch (userChoice.role){
    case "Intern":
    addIntern();
    break;
    //if engineer selected, inquirer prompts questions from addEngineer
case "Engineer":
    addEngineer();
    break;
case "Finished adding members":
    //team complete. team array pushed through generateHTML() to write a html file. file located in /dist folder
    console.log("Your team profile has been generated.");
    fs.writeFileSync("./dist/index.html", generateHTML(team))
    break} 
})};

//engineer questions
  function addEngineer() {inquirer.prompt([
  { name: "name", type: "input", message: "Please enter the engineer's name." },
  { name: "id", type: "input", message: "Enter the engineer's id." },
  {
    name: "email",
    type: "input",
    message: "Please enter the engineer's email address.",
  },
  {
    name: "githubUser",
    type: "input",
    message: "Please enter the employee's github username.",
  },
])
.then(data=> {
    const engineer = new Engineer (data.name, data.id, data.email, data.githubUser);
    team.push(engineer);
    console.log(engineer);
    buildTeam()})};


//intern questions
function addIntern() { inquirer.prompt([
  { 
    name: "name", 
    type: "input", 
    message: "Please enter the intern's name." 
  },
  { 
    name: "id", 
    type: "input", 
    message: "Enter the intern's id." 
  },
  { 
    name: "email", 
    type: "input", 
    message: "Please enter the intern's email address.",
  },
  {
      name: "school",
      type: "input",
      message: "Please enter the school attended by this intern."
  }
])
.then(data=> {
    const intern = new Intern (data.name, data.id, data.email, data.school);
    team.push(intern);
    console.log(intern);
    buildTeam()})};

//init function. add first team member - manager
addManager();

