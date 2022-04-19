const inquirer = require('inquirer');
const db = require('./db/connection');

const viewDepartments = () => {
    // sql goes here
    // console.table(`SELECT * FROM departments`);
}

const viewRoles = () => {
    // sql goes here
    // console.table(`SELECT * FROM roles`);
}

const viewEmployees = () => {
    // sql goes here
    // console.table(`SELECT * FROM employees`);
}

const addDepartment = () => {
    // more prompts
    // sql goes here
    // INSERT INTO departments (dept_name) VALUES (department.dept_name);
    // console.log('New department added');
    // console.log(`SELECT * FROM departments WHERE dept_id = department.dept_id`)
}

const addRole = () => {
    // more prompts
    // sql goes here
}

const addEmployee = () => {
    // more prompts
    // sql goes here
    // INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (employee.first_name, employee.last_name, employee.role_id, employee.manager_id);
    // console.log('New employee added');
    // console.log(`SELECT * FROM employees WHERE empl_id = employee.empl_id`)
}

const updateEmployee = () => {
    // more prompts
    // sql goes here
}

const displayAction = (action) => {
    console.log(`You have selected ${action}`);
    switch(action) {
        case 'View Departments': viewDepartments();
            break;
        case 'View Roles': viewRoles();
            break;
        case 'View Employees': viewEmployees();
            break;
        case 'Add Department': addDepartment();
            break;
        case 'Add Role': addRole();
            break;
        case 'Add Employee': addEmployee();
            break;
        case 'Update Employee': updateEmployee();
    }
}

const promptUser = () => {
    console.log("Before inquirer.prompt");
    const answers = inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee']
        }
    ])
    .then((answers) => {
        console.log(answers.action);
        // displayAction(answers);
    }) 
    console.log("after 77");
}

promptUser();