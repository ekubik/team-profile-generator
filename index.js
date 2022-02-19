const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
const generateHTML = require("./src/generateHTML");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const team = [];

const managerDetails = [
  { name: "name", type: "input", message: "Please enter the manager's name." },
  { name: "id", type: "input", message: "Enter the manager's id." },
  { name: "officeId", type: "input", message: "Please enter the office id." },
  {
    name: "email",
    type: "input",
    message: "Please enter the manager's email address.",
  },
];

const engineerDetails = [
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
];

const internDetails = [
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
];

