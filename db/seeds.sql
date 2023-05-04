INSERT INTO department (name)
VALUES ('Human Resources'),
    ('Finance'),
    ('Customer Service'),
    ('Training & Development'),
    ('Marketing'),
    ('Technology');

INSERT INTO role (title, salary, department_id)
VALUES ('Hiring Specialist', 42000, 1),
    ('Corporate Accountant', 58000, 2),
    ('Internal Audit', 25000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Candace', 'Owens', '3', null),
('Tom', 'Clancy', '1', null),
('Timothy', 'Eldridge', '2', null);