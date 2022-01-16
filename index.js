const fs = require('fs');
const inquirer = require('inquirer');

//empty array to store user input
const teamMembers = [];

function userInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Employee Name: ',
            name: 'name',
            validate: function (nameInput) {
                if (nameInput) {
                    return true;
                } else {
                    return 'Please enter Employee Name.';
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Email: ',
            name: 'email',
            validate: function (emailInput) {
                if (emailInput) {
                    return true;
                } else {
                    return 'Please enter Employee e-mail address.';
                }
            }
        },
            {
            type: 'input',
            message: 'Enter Employee Id: ',
            name: 'id',
            validate: function (idInput) {
                if (idInput) {
                    return true;
                } else {
                    return 'Please enter Employee Id.';
                }
            }
        },
        {
            type: 'list',
            message: 'Select Role: ',
            name: 'role',
            choices: ["Manager", "Engineer","Employee", "Intern"]
    
        },
    ])
};

userInfo();