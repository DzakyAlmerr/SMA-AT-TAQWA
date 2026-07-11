DROP TABLE IF EXISTS quiz_results, quizzes, materials, classes, teachers, students, users CASCADE;
-- Schema for Smart School Portal

CREATE TABLE users (
    user_id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL, -- 'Admin', 'Teacher', 'Student'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE students (
    student_id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150),
    class_id VARCHAR(50),
    student_number VARCHAR(50),
    phone VARCHAR(50),
    password VARCHAR(255) DEFAULT 'password123',
    status VARCHAR(50) DEFAULT 'Active',
    gender VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE teachers (
    teacher_id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150),
    subject VARCHAR(100),
    phone VARCHAR(50),
    password VARCHAR(255) DEFAULT 'password123',
    status VARCHAR(50) DEFAULT 'Active',
    subjects TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE classes (
    class_id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    grade VARCHAR(50),
    teacher_id VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE materials (
    material_id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT,
    class_id VARCHAR(50),
    author_id VARCHAR(50),
    author_name VARCHAR(150),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE quizzes (
    quiz_id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    class_id VARCHAR(50),
    author_id VARCHAR(50),
    duration_minutes INT,
    due_date TIMESTAMP,
    passing_score INT,
    max_attempts INT,
    questions JSONB,
    status VARCHAR(50) DEFAULT 'Draft', -- 'Draft', 'Published', 'Closed'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE quiz_results (
    result_id VARCHAR(50) PRIMARY KEY,
    quiz_id VARCHAR(50) NOT NULL,
    student_id VARCHAR(50) NOT NULL,
    student_name VARCHAR(150),
    answers JSONB,
    score INT DEFAULT 0,
    correct_count INT DEFAULT 0,
    wrong_count INT DEFAULT 0,
    time_spent_seconds INT DEFAULT 0,
    started_at TIMESTAMP,
    submitted_at TIMESTAMP,
    status VARCHAR(50) DEFAULT 'Pending' -- 'Pending', 'Submitted'
);

-- Insert Default Admin for Login
INSERT INTO users (user_id, username, password_hash, role) 
VALUES ('U001', 'admin', '$2a$10$rYmE3v5qE/E9Ff/7dFp4YOG0B0r8O1lV5f5g6h7i8j9k0l1m2n3o4', 'Admin');
-- Note: the password_hash above is a mock, you may need to register an admin via API or update it.
-- For local testing, 'admin123' might be hashed differently. We recommend using bcrypt to generate real hashes.
