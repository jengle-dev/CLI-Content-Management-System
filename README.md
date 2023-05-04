# CLI-Content-Management-System
I've created a command-line interface/application from scratch to manage a company's human resources data, an employee database, by using Node.js, Inquirer, and MySQL.

## Installation
Here the steps to get up and running:
* `npm i` <br>
**REQUIRED:** You will need a MySQL username and account because you could be prompted to enter your MySQL password. 
* To initiate MySQL the command is `mysql -u root -p` then you are prompted for your password. <br>*Note: Command lines are notorious for not allowing copy/paste. You can copy/paste if you right click in the command line on most machines.*
* The command line will change from powershell or node to mysql. Enter `source db/schema.sql;` to set up the database locally. 
* Then to *seed* the database with data, enter `source db/seeds.sql;`
* To get out of the mysql shell type `quit` or `exit`

To fully initiate the Command Line Interface type either `npm start` or `node index.js`.

To exit any question or the CLI at any time, click `CTRL+C` and the CLI will ask you if you want to terminate the batch job. 

## Usage & Visuals
A user will be able to go through command prompts to do the following:

* To view all departments
* To view all employee roles
* To view all employee data
* To create a new role
* To create a new employee entry

### Screenshots
Initial Prompt of Departments: <br>
![image](https://user-images.githubusercontent.com/117794203/236326785-9300fdbd-dbad-4e63-9709-4724f0f9f931.png)

Viewing All Employee Roles: <br>
![image](https://user-images.githubusercontent.com/117794203/236327007-6d8c8747-563b-44cb-9e29-2e2418d325bc.png)

Entering New Employee Data: <br>
![image](https://user-images.githubusercontent.com/117794203/236327140-e783ea2a-f169-44e5-beb4-cde94b57bfaf.png)

### Video
![CLI Content Management System HR](https://user-images.githubusercontent.com/117794203/236331029-64875982-e134-4570-88e4-50b54c6ecdd8.gif)

<a href="https://drive.google.com/file/d/1KmyHf6bsI5JnXZKTgV4-F2bCP4WvDR1C/view">Link</a> to recording of working application. https://drive.google.com/file/d/1KmyHf6bsI5JnXZKTgV4-F2bCP4WvDR1C/view

## Support
If there are issues with the application, please reach out to me, Jennifer Engle, at j.engle.dev@gmail.com and reference the application, site's URL or GitHub repo you're reviewing. Please provide any screenshots and behavior along with your browser information. Thank you!

## Credits
I'd like to thank <a href="https://github.com/Cyril1743">David Love @Cyril1743</a> & <a href="https://github.com/SChafinIII">Steven Chafin @SChafinIII</a> for helping me understand switch statements and cases.

### References
These references helped me build this project:
* https://nodejs.org/en/docs/
* https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/
* https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/filter-validate-progress.js
* https://www.javatpoint.com/nodejs-mysql-insert-record
* https://www.javatpoint.com/nodejs-mysql-create-connection
* https://www.npmjs.com/package/inquirer?activeTab=explore
* https://sequelize.org/docs/v6/getting-started/
* https://www.w3schools.com/sql/sql_constraints.asp
* https://www.sqlshack.com/sql-insert-into-select-statement-overview-and-examples/
* Reviewed coursework solved files.
* ASKBCS help in Slack
* Class instructor team & tutoring

## License
There is no license for this project.

## Project Status
Sumitted for grading review. I will continue to work on this. 
<br>I am open to collaboration for contributing to updates to this page. Please email me at j.engle.dev@gmail.com.

## URL to GitHub Repo
* https://github.com/jengle-dev/CLI-Content-Management-System
