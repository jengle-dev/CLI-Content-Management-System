const inquirer = require('/node_modules/inquirer/lib/inquirer.js');
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
  
  // Connect to server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${host}:${port}/`);
  });

  // Show console questions
  const questions = [
    {
      type: 'input',
      name: 'first_question',
      message: 'What would you like to do?',
      async validate() {
        await new Promise((r) => setTimeout(r, 3000));
        return true;
      },
      async filter(answer) {
        await new Promise((r) => setTimeout(r, 3000));
        return `filtered${answer}`;
      },
      filteringText: 'Filtering your answer...',
      validatingText: 'Validating what you wrote...',
    },
    {
      type: 'input',
      name: 'second_question',
      message: 'What is the name of the new department?',
      async validate() {
        await new Promise((r) => setTimeout(r, 3000));
        return true;
      },
      async filter(answer) {
        await new Promise((r) => setTimeout(r, 3000));
        return `filtered${answer}`;
      },
    },
    {
        type: 'input',
        name: 'third_question',
        message: 'What is the name of the new role?',
        async validate() {
          await new Promise((r) => setTimeout(r, 3000));
          return true;
        },
        async filter(answer) {
          await new Promise((r) => setTimeout(r, 3000));
          return `filtered${answer}`;
        },
      },
  ];
  
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });
