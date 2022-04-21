INSERT INTO departments (dept_name) 
VALUES
    ('Executive'),
    ('Development'),
    ('Testing'),
    ('Production Support'),
    ('Interns');

INSERT INTO roles (title, salary, department_id) 
VALUES 
    ('CEO', '250000', '1'),
    ('Dev Manager', '125000', '2'),
    ('Testing Manager', '125000', '3'),
    ('Production Manager', '125000', '4'),
    ('Developer', '100000', '2'),
    ('Testing Analyst', '100000', '3'),
    ('Production Analyst', '100000', '4'),
    ('Production Intern', '30000', '4');

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
    ('Matt', 'Noreika', '1', null),
    ('Justin', 'Smith', '2', '1'),
    ('Alyssa', 'Root', '3', '1'),
    ('Ivan', 'Ivanov', '4', '1'),
    ('Bart', 'Lawrence', '5', '2'),
    ('Tammy', 'Thompson', '6', '3'),
    ('Wanda', 'Wallace', '7', '4'),
    ('Christian', 'Johnson', '8', '4'),
    ('Stewart', 'Big', '6', '3'),
    ('Camila', 'Suarez', '5', '2');





