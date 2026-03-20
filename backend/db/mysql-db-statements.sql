CREATE DATABASE school;

USE school;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    course VARCHAR(100)
);

INSERT INTO
    students (name, age, course)
VALUES
    ('Rahul', 20, 'Computer Science'),
    ('Anita', 22, 'Mathematics'),
    ('Kiran', 19, 'Physics');
    
SELECT * FROM school.students;

INSERT INTO
    students (name, age, course)
VALUES
    ('Shru', 1, 'AI')
;

SELECT * FROM school.students;
