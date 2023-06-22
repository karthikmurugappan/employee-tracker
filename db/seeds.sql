USE employee_db;

INSERT INTO departments (id, name) VALUES
(1, 'Engineering'),
(2, 'Finance'),
(3, 'Sales'),
(4, 'Marketing');

INSERT INTO roles (id, title, salary, department_id) VALUES
(1, 'Software Engineer', 150000, 1),
(2, 'Finance Analyst', 130000, 2),
(3, 'Sales Associate', 120000, 3),
(4, 'Marketing Specialist', 110000, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'Stephen', 'Curry', 1, 1),
(2, 'Klay', 'Thompson', 4, 2),
(3, 'LeBron', 'James', 3, 1),
(4, 'Kevin', 'Durant', 2, NULL),
(5, 'Devin', 'Booker', 2, 3),
(6, 'Anthony', 'Davis', 1, NULL),
(7, 'Trae', 'Young', 4, 2),
(8, 'Damian', 'Lillard', 2, 3),
(9, 'Ja', 'Morant', 3, NULL),
(10, 'Jayson', 'Tatum', 2, 3);