INSERT INTO departments (dept_name) 
VALUES
    ('Executive'),
    ('Development'),
    ('Testing'),
    ('Production Support'),
    ('Interns');

INSERT INTO roles (title, salary, dept_id) 
VALUES 
    ('CEO', '250000', '1'),
    ('CFO', '200000', '1'),
    ('CTO', '200000', '1'),
    ('Dev Manager', '125000', '2'),
    ('Testing Manager', '125000', '3'),
    ('Production Manager', '125000', '4'),
    ('Developer', '100000', '2'),
    ('Testing Analyst', '100000', '3'),
    ('Production Analyst', '100000', '4'),
    ('Production Intern', '30000', '4');


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
    ('Matt', 'Noreika', '1', '1'),
    ('Clinton', 'Tarzia', '2', '1'),
    ('Vaughn', 'Smith', '3', '1'),
    ('Justin', 'Smith', '4', '1'),
    ('Alyssa', 'Root', '5', '1'),
    ('Ivan', 'Ivanov', '6', '1'),
    ('Bart', 'Lawrence', '7', '2'),
    ('Tammy', 'Thompson', '8', '3'),
    ('Wanda', 'Wallace', '9', '4'),
    ('Christian', 'Johnson', '10', '4'),
    ('Stewart', 'Big', '8', '3'),
    ('Camila', 'Suarez', '7', '2');





