DROP DATABASE IF EXISTS human_resources_db;
CREATE DATABASE human_resources_db;
USE human_resources_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    CONSTRAINT FK_department_id
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT DEFAULT NULL,
    CONSTRAINT FK_role_id
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL
);

ALTER TABLE employee
    ADD FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL;