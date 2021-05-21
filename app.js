// Require & Imports
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./classes/Employee')
const Manager = require("./classes/Manager");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
const team = [];
const path = require("path");

function switchFunc() {
  inquirer
    .prompt({
      type: "list",
      message: "Employee Role",
      choices: ["Engineer", "Intern", "Manager", "Done"],
      name: "employeeRole",
    })
    .then((res) => {
      switch (res.employeeRole) {
        case "Manager":
          addManager();
          break;
        case "Intern":
          addIntern();
          break;
        case "Engineer":
          addEngineer();
          break;

        default: finish()
          break;
      }
    });
}


function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Manager Name",
        name: "ManagerName",
      },
      {
        type: "input",
        message: "Manager Email",
        name: "ManagerEmail",
      },
      {
        type: "input",
        message: "Manager ID",
        name: "ManagerId",
      },
      {
        type: "input",
        message: "Office Number",
        name: "ManagerOfficeNumber",
      },
    ])
    .then((res) => {
      const manager = new Manager(
        res.ManagerName,
        res.ManagerEmail,
        res.ManagerId,
        res.ManagerOfficeNumber
      );
      team.push(manager);
      switchFunc();
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Engineer Name",
        name: "EngineerName",
      },
      {
        type: "input",
        message: "Engineer Email",
        name: "EngineerEmail",
      },
      {
        type: "input",
        message: "Engineer ID",
        name: "EngineerId",
      },
      {
        type: "input",
        message: "Github Username",
        name: "EngineerGitHub",
      },
    ])
    .then((res) => {
      const engineer = new Engineer(
        res.EngineerName,
        res.EngineerEmail,
        res.EngineerId,
        res.EngineerGitHub
      );
      team.push(engineer);
      switchFunc();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Intern Name",
        name: "InternName",
      },
      {
        type: "input",
        message: "Intern Email",
        name: "InternEmail",
      },
      {
        type: "input",
        message: "Intern ID",
        name: "InternId",
      },
      {
        type: "input",
        message: "School Attended",
        name: "school",
      },
    ])
    .then((res) => {
      const intern = new Intern(
        res.InternName,
        res.InternEmail,
        res.InternId,
        res.school
      );
      team.push(intern);
      switchFunc();
    });
}

function finish() {
    let output = path.join(__dirname, "output");
    if (!fs.existsSync(output)) {
        fs.mkdirSync(output);
    }
    fs.writeFileSync(path.join(output, "team.html"), renderHtml(team), 'utf-8')
    
}

 function renderHtml(team) {
    const elements = team.map(employee => employee.getHtml());
    team.push('')
    // const managerName = managerArr.getName()
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        ${elements}
    </body>
    </html>`
}



switchFunc();





