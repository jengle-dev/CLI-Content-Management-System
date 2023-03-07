const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');
const { printTable } = require("console-table-printer");

PORT = 3001;

// Connect to the hr database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '?6NC2tjY!e!5Ddc',
    database: 'human_resources_db',
    multipleStatements: true
  },
  console.log(`Connected to the human_resources_db database.`)
);

//console.Table is a module package
// Show console questions

inquirer
  .prompt({
    type: 'list',
    name: 'options',
    message: "What would you like to do?",
    choices: [
      'View All Departments',
      'View All Employee Roles',
      'View All Employee Data',
      'Create a New Role',
      'Create a New Employee Entry',
      'Update an Employee',
      'Update a Manager',
      'View Employees by Manager',
      'View Employees by Department',
      'Delete a Department/Role/Employee',
      'View Budget Information'
    ],
  })
  .then((userSelection) => {
    console.log('Answer:', userSelection.options);

    //attempt at switch statement to go through choices of inquirer.prompt
    switch (userSelection) {
      case 0:
        // to View All Departments
      default:

    }
    // SQL Queries
    // Query database for All fields from department table
    db.query('SELECT * FROM department', function (err, results) {
      console.log(results);
    });

    // Query database for All fields from role table
    db.query('SELECT * FROM role', function (err, results) {
      console.log(results);
    });
  });