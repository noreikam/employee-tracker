const db = require('../db/connection');

const executeQuery = (sql, obj) => {
    db.query(sql, 
        function(err, results) {
            if(err) {throw err;}
            if(obj.op === 'READ') {
                console.table(results);
            }
            if(obj.op === 'READ(sum)') {
                const budget = JSON.stringify(results).substr(19).replace('"}]', '');
                console.log('Department Budget: $' + budget);
            }
            if(obj.op === 'CREATE') {
                console.log(`Inserted new row with id = ${results.insertId} into ${obj.table}`)
            }
            if(obj.op === 'UPDATE') {
                console.log(`Updated row with id = ${obj.id} in ${obj.table}`)
            }
            if(obj.op === 'DELETE') {
                if(results.affectedRows === 1) {
                    console.log(`Deleted row with id = ${obj.id} from ${obj.table}`);
                } else {
                    console.log('No employee record exists for the input ID');
                }
            }
        }
    );
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

const getAllEmpl = () => {
    const sql = `SELECT e.empl_id, e.first_name, e.last_name, r.title, r.salary, d.dept_name
                FROM ((employees AS e 
                INNER JOIN roles AS r ON e.role_id = r.role_id)
                INNER JOIN departments AS d ON r.dept_id = d.dept_id)
                ORDER BY e.empl_id;`;
    const obj = {op: 'READ',
                table: 'employees'};
    executeQuery(sql, obj);
}

const emplByMgr = (mgr_id) => {
    const sql = `SELECT e.empl_id, e.first_name, e.last_name, r.title, r.salary, d.dept_name
                FROM ((employees AS e 
                INNER JOIN roles AS r ON e.role_id = r.role_id)
                INNER JOIN departments AS d ON r.dept_id = d.dept_id)
                WHERE e.manager_id = ${mgr_id}
                ORDER BY e.empl_id;`;
    const obj = {op: 'READ',
                table: 'employees'};
    executeQuery(sql, obj);
}

const emplByDept = (dept_id) => {
    const sql = `SELECT e.empl_id, e.first_name, e.last_name, r.title, r.salary, d.dept_name
                FROM ((employees AS e 
                INNER JOIN roles AS r ON e.role_id = r.role_id)
                INNER JOIN departments AS d ON r.dept_id = d.dept_id)
                WHERE r.dept_id = ${dept_id}
                ORDER BY e.empl_id;`;
    const obj = {op: 'READ',
                table: 'employees'};
    executeQuery(sql, obj);
}

const deptBudget = (dept_id) => {
    const sql = `SELECT SUM(r.salary)
    FROM (roles AS r
    INNER JOIN employees AS e ON e.role_id = r.role_id)
    WHERE r.dept_id = ${dept_id};`;
    const obj = {op: 'READ(sum)', 
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

const updateEmplRole = (employee_id, new_role) => {
    const sql = `UPDATE employees
                SET role_id = '${new_role}'
                WHERE empl_id = '${employee_id}';`;
    const obj = {op: 'UPDATE',
                table: 'employees',
                id: employee_id};
    executeQuery(sql, obj);
}

const updateEmplMgr = (employee_id, new_mgr) => {
    const sql = `UPDATE employees
                SET manager_id = '${new_mgr}'
                WHERE empl_id = '${employee_id}';`;
    const obj = {op: 'UPDATE',
                table: 'employees',
                id: employee_id};
    executeQuery(sql, obj);
}

const deleteEmpl = (employee_id) => {
    const sql = `DELETE FROM employees 
                WHERE empl_id = '${employee_id}';`;
    const obj = {op: 'DELETE',
                table: 'employees',
                id: employee_id};
    executeQuery(sql, obj);
}


const functions = {getDepts, getRoles, getAllEmpl, emplByMgr, emplByDept, deptBudget, addDept, addRole, addEmployee, updateEmplRole, updateEmplMgr, deleteEmpl};

module.exports = functions;

db.connect(function (err) {
    console.log(err);
    if (err) throw err;
  });