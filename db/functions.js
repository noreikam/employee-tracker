// const db = require('../db/connection');
const mysql = require('mysql2');

const getDepts = () => {
    const query = `SELECT * FROM departments;`;
    return query;        
}

const getRoles = () => {
    const query = `SELECT * FROM roles;`;
    return query;
}

const getEmployees = () => {
    const query = `SELECT * FROM employees;`;
    return query;
}

const addDept = (name) => {
    const query = `INSERT INTO departments (dept_name) 
        VALUES ('${name}');`
    return query;
}

const addRole = (title, salary, deptartment_id) => {
    const query = `INSERT INTO roles 
        (title, salary, department_id) 
        VALUES ('${title}', '${salary}', '${deptartment_id}');`
    return query;
}

const addEmployee = (first_name, last_name, role_id, manager_id) => {
    const query = `INSERT INTO employees (first_name, last_name, role_id, manager_id) 
    VALUES ('${first_name}', '${last_name}', '${role_id}', '${manager_id}');`;
    return query;
}

const updateEmployee = (employee_id, new_role) => {
    const query = `UPDATE employees
        SET role_id = '${new_role}'
        WHERE id = '${employee_id}';`;
    return query;
}


const functions = {getDepts, getRoles, getEmployees, addDept, addRole, addEmployee, updateEmployee};

module.exports = functions;

// db.connect(function (err) {
//     console.log(err);
//     // if (err) throw err;
//   });