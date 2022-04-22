const inquirer = require('inquirer');
const functions = require('./db/functions');

const validate = (input) => {
    if(input) {
        return true;
    } else {
        console.log('Input required');
        return false;
    }
}

const viewDepartments = () => {
    functions.getDepts();
}

const viewRoles = () => {
    functions.getRoles();
}

const viewAllEmpl = () => {
    functions.getAllEmpl();
}

const emplByMgr = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'mgr_id', 
            message: 'Enter manager ID: ',
            validate: input => validate(input)
        }
    ]).then((answers) => {
        functions.emplByMgr(answers.mgr_id);
    })
}

const emplByDept = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'dept_id', 
            message: 'Enter department ID: ',
            validate: input => validate(input)
        }
    ]).then((answers) => {
        functions.emplByDept(answers.dept_id);
    })
}

const deptBudget = () => {
    inquirer.prompt([
        {
            type: 'input', 
            name: 'dept_id', 
            message: 'Enter department ID: ',
            validate: input => validate(input)
        }
    ]).then((answers) => {
        functions.deptBudget(answers.dept_id);
    })
}

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter department name: ',
            validate: input => validate(input)
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
            message: 'Enter role title: ',
            validate: input => validate(input)
        }, 
        {
            type: 'input',
            name: 'salary',
            message: 'Enter role salary: ',
            validate: input => validate(input)
        }, 
        {
            type: 'input',
            name: 'department_id',
            message: 'Enter role department: ',
            validate: input => validate(input)
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
            message: 'Enter first name: ',
            validate: input => validate(input)
        }, 
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter last name: ',
            validate: input => validate(input)
        }, 
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter role ID: ',
            validate: input => validate(input)
        }, 
        {
            type: 'input',
            name: 'manager_id',
            message: 'Enter manager ID: ',
            validate: input => validate(input)
        }
    ])
    .then((answers) => {
        functions.addEmployee(answers.first_name, answers.last_name, answers.role_id, answers.manager_id);
    })
}

const updateEmplRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employee_id',
            message: 'Enter employee ID: ',
            validate: input => validate(input)
        }, 
        {
            type: 'input',
            name: 'new_role',
            message: 'Enter new role ID: ',
            validate: input => validate(input)
        }
    ])
    .then((answers) => {
        functions.updateEmplRole(answers.employee_id, answers.new_role);
    })
}

const updateEmplMgr = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employee_id',
            message: 'Enter employee ID: ',
            validate: input => validate(input)
        }, 
        {
            type: 'input',
            name: 'new_mgr',
            message: 'Enter new manager ID: ',
            validate: input => validate(input)
        }
    ])
    .then((answers) => {
        functions.updateEmplMgr(answers.employee_id, answers.new_mgr);
    })
}

const deleteEmpl = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employee_id',
            message: 'Enter employee ID: ',
            validate: input => validate(input)
        }
    ])
    .then((answers) => {
        functions.deleteEmpl(answers.employee_id);
    })
}

const filterActions = (answers) => {
    switch(answers.action) {
        case 'View Departments': viewDepartments();
            break;
        case 'View Roles': viewRoles();
            break;
        case 'View All Employees': viewAllEmpl();
            break;
        case 'View Employees by Manager': emplByMgr();
            break;
        case 'View Employees by Department': emplByDept();
            break;
        case 'View Department Budget': deptBudget();
            break;
        case 'Add Department': addDepartment();
            break;
        case 'Add Role': addRole();
            break;
        case 'Add Employee': addEmployee();
            break;
        case 'Update Employee Role': updateEmplRole();
            break;
        case 'Update Employee Manager': updateEmplMgr();
        break;
        case 'Delete Employee': deleteEmpl();
    }
}

const promptUser = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['View Departments', 'View Roles', 'View All Employees', 'View Employees by Manager', 'View Employees by Department', 'View Department Budget', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role', 'Update Employee Manager', 'Delete Employee']
        }
    ])
    .then((answers) => {
        filterActions(answers);
    })
}

promptUser();