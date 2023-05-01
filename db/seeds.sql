INSERT INTO department (name)
VALUES ("Human Resources"),
    ("Finance"),
    ("Customer Service"),
    ("Training & Development"),
    ("Marketing"),
    ("Technology");

INSERT INTO role (title, salary, department)
VALUES ("Hiring Specialist", 42000, 1),
    ("Corporate Accountant", 58000, 2);
    -- ("Internal Audit", 2),
    -- ("Customer Care Specialist", 3),
    -- ("Retail Associate", 3),
    -- ("New Hire Instructor", 4),
    -- ("Continuing Education Instructor", 4),
    -- ("Graphic Designer", 5),
    -- ("Research Analyst", 5),
    -- ("Software Engineer", 6),
    -- ("Database Admin", 6),
    -- ("Database Security Expert", 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Candace", "Owens", "3", null),
("Tom", "Clancy", "1", null),
("Timothy", "Eldridge", "2", null);