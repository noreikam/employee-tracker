const db = require('../db/connection');

const executeQuery = (sql, obj) => {
    db.query(sql, 
        function(err, results) {
            if(err) {throw err;}
            console.table(results);
            console.log(`Success!  ${obj.op} executed on ${obj.table}`);
            if(obj.op === 'CREATE') {
                console.log(`Inserted new row with id = ${results.insertId}`)
            }
            if(obj.op === 'UPDATE') {
                console.log(`Updated row with id = ${obj.id}`)
            }
        });
}


const getDepts = () => {
    const sql = `SELECT * FROM departments;`;
    const obj = {op: 'READ',
                table: 'departments'};
    executeQuery(sql, obj);
}

const getRoles = () => {
    const sql = `SELECT r.title, r.salary, 
                d.dept_id, d.dept_name
                FROM (roles AS r INNER JOIN departments AS d
                ON r.dept_id = d.dept_id);`;
    const obj = {op: 'READ',
                table: 'roles'};
    executeQuery(sql, obj);
}

const getEmployees = () => {
    const sql = `SELECT e.empl_id, e.first_name, e.last_name, e.role_id, r.title, r.salary, r.dept_id, d.dept_name
                FROM ((employees AS e 
                INNER JOIN roles AS r ON e.role_id = r.role_id)
                INNER JOIN departments AS d ON r.dept_id = d.dept_id)
                ORDER BY e.empl_id;`;
    const obj = {op: 'READ',
                table: 'employees'};
    executeQuery(sql, obj);
}

const addDept = (name) => {
    const sql = `INSERT INTO departments (dept_name) 
                VALUES ('${name}');`
    const obj = {op: 'CREATE',
                table: 'departments'};
    executeQuery(sql, obj);
}

const addRole = (title, salary, dept_id) => {
    const sql = `INSERT INTO roles 
                (title, salary, dept_id) 
                VALUES ('${title}', '${salary}', '${dept_id}');`
    const obj = {op: 'CREATE',
                table: 'roles'};
    executeQuery(sql, obj);
}

const addEmployee = (first_name, last_name, role_id, manager_id) => {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) 
                VALUES ('${first_name}', '${last_name}', '${role_id}', '${manager_id}');`;
    const obj = {op: 'CREATE',
                table: 'employees'};
    executeQuery(sql, obj);
}

const updateEmployee = (employee_id, new_role) => {
    const sql = `UPDATE employees
                SET role_id = '${new_role}'
                WHERE empl_id = '${employee_id}';`;
    const obj = {op: 'UPDATE',
                table: 'employees',
                id: employee_id};
    executeQuery(sql, obj);
}


const functions = {getDepts, getRoles, getEmployees, addDept, addRole, addEmployee, updateEmployee};

module.exports = functions;

db.connect(function (err) {
    console.log(err);
    if (err) throw err;
  });