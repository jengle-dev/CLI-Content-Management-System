const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');
// const { Sequelize } = require('sequelize');
const { printTable } = require("console-table-printer");

PORT = 3001;

// Connect to the hr database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: process.env.DB_PASSWORD,
    database: 'human_resources_db',
    multipleStatements: true
  },
  console.log(`Connected to the human_resources_db database.`)
);

//console.Table is a module package
// Show console questions

inquirer
  .prompt([{
    type: 'list',
    name: 'options',
    message: "What would you like to do?",
    choices: [
      'View All Departments',
      'View All Employee Roles',
      'Create a New Role',
      'Create a New Employee Entry',
      'Update an Employee',
      'Update a Manager',
      'View Employees by Manager',
      'View Employees by Department',
      'Delete a Department/Role/Employee',
      'View Budget Information'
    ],
  }])
  .then((answers) => {
    console.log('Answer:', answers.options)
    let choice = answers.options
    //attempt at switch statement to go through choices of inquirer.prompt
    switch (choice) {
      case 'View All Departments':
        // to View All Departments
        viewAllDepartments();
        break;
      case 'View All Employee Roles':
        // to View All Employee Roles
        viewAllRoles();
        break;
      case 'Create a New Role':
        //to Create a New Role
        addRole();
        break;
      case 'Create a New Employee Entry':
        // to Create a New Employee Entry
        addEmployee();
        break;
      case 'Update an Employee':
        // to Update an Employee
        updateEmployee();
        break;
      case 'Update a Manager':
        // to Update a Manager
        updateManager();
        break;
      case 'View Employees by Manager':
        // to View Employees by Manager
        viewByManager();
        break;
      case 'View Employees by Department':
        // to View Employees by Department
        viewByDepartment();
        break;
      case 'Delete a Department/Role/Employee':
        // to Delete a Department/Role/Employee
        deleteRecord();
        break;
      case 'View Budget Info':
        // to View Budget Info
        viewBudget();
        break;

      // No selection or error
      default:
        console.log("Please make a selection.")
    }
  }).catch(err => console.log(err));

// SQL Queries
// Query database for All fields from department table
function viewAllDepartments() {
  db.query('SELECT * FROM department', function (err, results) {
    console.log(results);
  });
};

// Query database for All fields from role table
function viewAllRoles() {
  db.query('SELECT * FROM role', function (err, results) {
    console.log(results);
  })
};


// Query database for All Employees Table
function viewAllEmployees() {
  db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  })
};