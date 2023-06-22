USE employees_db;

INSERT INTO departments (name) VALUES
('Engineering'),
('Finance'),
('Sales'),
('Marketing');

INSERT INTO roles (title, salary, department_id) VALUES
('Software Engineer', 150000, 1),
('Finance Analyst', 130000, 2),
('Sales Associate', 120000, 3),
('Marketing Specialist', 110000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('Stephen', 'Curry', 1, 1),
('Klay', 'Thompson', 4, 2),
('LeBron', 'James', 3, 1),
('Kevin', 'Durant', 2, NULL),
('Devin', 'Booker', 2, 3),
('Anthony', 'Davis', 1, NULL),
('Trae', 'Young', 4, 2),
('Damian', 'Lillard', 2, 3),
('Ja', 'Morant', 3, NULL),
('Jayson', 'Tatum', 3, 3);