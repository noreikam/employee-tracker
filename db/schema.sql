DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
  dept_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  role_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(8, 2) NOT NULL,
  dept_id INTEGER NOT NULL,
  CONSTRAINT fk_dept_id FOREIGN KEY (dept_id) REFERENCES departments(dept_id) ON DELETE CASCADE
);

CREATE TABLE employees (
  empl_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER,
  CONSTRAINT fk_role_id FOREIGN KEY (role_id) REFERENCES roles(role_id) ON DELETE CASCADE
  -- CONSTRAINT fk_manager_id FOREIGN KEY (manager_id) REFERENCES employees(empl_id) ON DELETE SET NULL
);