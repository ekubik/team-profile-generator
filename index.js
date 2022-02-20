const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
//const jest = require("jest");
const {generateManagerCard, generateHTML, generateInternCard,generateEngineerCard} = require("./src/generateHTML");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const team = [];

function addManager() { inquirer.prompt([
  { name: "name", type: "input", message: "Please enter the manager's name." },
  { name: "id", type: "input", message: "Enter the manager's id." },
  { name: "officeNumber", type: "input", message: "Please enter the office id." },
  {
    name: "email",
    type: "input",
    message: "Please enter the manager's email address.",
  },
]).then( data => {
    const manager = new Manager (data.name, data.id, data.email, data.officeNumber);
    console.log(manager);
    team.push(manager);
    fs.writeFileSync("./dist/index.html", generateManagerCard(data))
    buildTeam();
})
};

function buildTeam(){ inquirer.prompt ([
    {name: "role",
    type: "list",
    message: "Please select the member that you would like to add to your team.",
    choices: ["Engineer", "Intern", "Finished adding members"]
    }
]).then(userChoice => {
    switch (userChoice.role){
    case "Intern":
    addIntern();
    break;
case "Engineer":
    addEngineer();
    break;
case "Finished adding members":
    console.log("Your team profile has been generated.");
    break} 
})};

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
    fs.appendFileSync("./dist/index.html", generateEngineerCard(data));
    buildTeam()})};

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
    fs.appendFileSync("./dist/index.html", generateInternCard(data));
    buildTeam()})};


addManager()




