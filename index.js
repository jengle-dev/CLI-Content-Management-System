const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');
const {printTable} = require("console-table-printer");

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
 
import inquirer from '../lib/inquirer.js';

inquirer
  .prompt({
    type: 'list',
    name: 'chocolate',
    message: "What's your favorite chocolate?",
    choices: ['Mars', 'Oh Henry', 'Hershey'],
  })
  .then(() => {
    inquirer.prompt({
      type: 'list',
      name: 'beverage',
      message: 'And your favorite beverage?',
      choices: ['Pepsi', 'Coke', '7up', 'Mountain Dew', 'Red Bull'],
    });
  });
  //can pass in an array of objects in the below variable questions instead, 
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });
