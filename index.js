const inquirer = require('inquirer');
const functions = require('./db/functions');

const viewDepartments = () => {
    functions.getDepts();
    return;
}

const viewRoles = () => {
    functions.getRoles();
}

const viewEmployees = () => {
    functions.getEmployees();
}

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter department name: '
        }
    ])
    .then((answers) => {
        functions.addDept(answers.name);
    })
}

const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter role title: '
        }, 
        {
            type: 'input',
            name: 'salary',
            message: 'Enter role salary: '
        }, 
        {
            type: 'input',
            name: 'department_id',
            message: 'Enter role department: '
        }
    ])
    .then((answers) => {
        functions.addRole(answers.title, answers.salary, answers.department_id);
    })
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter first name: '
        }, 
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter last name: '
        }, 
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter role ID: '
        }, 
        {
            type: 'input',
            name: 'manager_id',
            message: 'Enter manager ID: '
        }
    ])
    .then((answers) => {
        functions.addEmployee(answers.first_name, answers.last_name, answers.role_id, answers.manager_id);
    })
}

const updateEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employee_id',
            message: "Enter employee's ID"
        }, 
        {
            type: 'input',
            name: 'new_role',
            message: 'Enter new role ID: '
        }
    ])
    .then((answers) => {
        functions.updateEmployee(answers.employee_id, answers.new_role);
    })
}

const filterActions = (answers) => {
    switch(answers.action) {
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
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee']
        }
    ])
    .then((answers) => {
        filterActions(answers);
    })
}

promptUser();