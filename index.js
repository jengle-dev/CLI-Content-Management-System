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
            // 'View Employees by Manager',
            // 'View Employees by Department',
            // 'Delete a Department/Role/Employee',
            // 'View Budget Information'
        ],
    })
    .then(() => {
        inquirer.prompt({
            type: 'list',
            name: 'additionalOptions',
            message: 'What other option would you like to do?',
            choices: ['View Employees by Manager',
            'View Employees by Department',
            'Delete a Department/Role/Employee',
            'View Budget Information'],
        });
    });
//can pass in an array of objects in the below variable questions instead, 
inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
});
