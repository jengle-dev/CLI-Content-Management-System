const inquirer = require('inquirer');
require('dotenv').config();
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
    password: process.env.DB_PASSWORD,
    database: 'human_resources_db',
    multipleStatements: true
  },
  // console.log(`Connected to the human_resources_db database.`)
);

db.connect(function (err) {
  if (err) throw err;
});

//console.Table is a module package
// Show console questions
inquirer
  .prompt([{
    type: 'list',
    name: 'options',
    message: "What would you like to do?",
    choices: [
      'View All Departments',
      'View All Employees',
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
    //switch statement to go through choices of inquirer.prompt
    switch (choice) {
      case 'View All Departments':
        // to View All Departments
        viewAllDepartments();
        break;
        // to View All Employees
        case 'View All Employees':
          // to View All Departments
          viewAllEmployees();
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
    console.table(results);
  });
};

//Query database for All employees from employee table
function viewAllEmployees() {
  db.query('SELECT * FROM employee', function (err, results) {
    console.table(results);
  });
};

// Query database for All fields from role table
function viewAllRoles() {
  db.query('SELECT * FROM role', function (err, results) {
    if (err) throw err;
    console.table(results);
  });
};

// Query database to Add Role to role Table
function addRole() {
  db.query('SELECT * FROM department', function (err, results) {
    if (err) throw err;

    // prompt for new role details
    inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the new role:'
      },
      {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of the new role?'
      },
      {
        type: 'list',
        name: 'department',
        message: 'Select the departement for the new role:',
        choices: results.map(dept => ({
          name: dept.name,
          value: dept.id
        }))
      }
    ])
      .then(function (answer) {
        //actually insert to the table in the database
        db.query('INSERT INTO role SET ?', {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.department
        }, 
        function (err, results) {
          if (err) throw err;
          console.log(`New role '${answer.title}' added to database.`);
        });
      });
  });
};

// Query database to Add Employee to employee Table
function addEmployee() {
  db.query('SELECT * FROM employee', function (err, results) {
    if (err) throw err;

    // prompt for new employee details
    inquirer.prompt([
      {
        type: 'input',
        name: 'first_name',
        message: 'Enter the first name for the employee:'
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'Enter the last name for the employee:'
      },
      {
        type: 'list',
        name: 'department',
        message: 'Select the departement for the new employee:',
        choices: results.map(dept => ({
          name: dept.name,
          value: dept.id
        }))},
        {
          type: 'list',
          name: 'role',
          message: 'Select the role for the new employee:',
          choices: results.map(role => ({
            name: role.name,
            value: role.id
          }
        ))
      }
    ])
      .then(function (answer) {
        //actually insert to the employee table in the database
        db.query('INSERT INTO employee SET ?', {
          first_name: answer.first_name,
          last_name: answer.last_name,
          // department_name: answer.name,
          // role_ : answer.role_name
        }, 
           function (err, results) {
          if (err) throw err;
          console.log(`New employee '${answer.first_name} ${answer.last_name}' added to database.`);
        });
      });
  });
};
