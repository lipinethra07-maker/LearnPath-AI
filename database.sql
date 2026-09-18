CREATE DATABASE learnpath_ai;

USE learnpath_ai;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    language VARCHAR(50)
);

CREATE TABLE study_materials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    subject VARCHAR(100),
    content TEXT,
    summary TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE quiz_results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    topic VARCHAR(100),
    score INT,
    total_questions INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE progress (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    subject VARCHAR(100),
    percentage INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);