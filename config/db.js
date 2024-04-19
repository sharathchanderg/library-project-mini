// models/db.js
const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'library'
};

const db = mysql.createPool(dbConfig);

const connectToDatabase = async () => {
    try {
        const connection = await db.getConnection();
        console.log('Database connected successfully');
        connection.release();
        // Check and create tables if not exist
        await createTablesIfNotExist();
    } catch (error) {
        console.error('Error connecting to database:', error);
        process.exit(1); // Exit the process if there's a connection error
    }
};

const createTablesIfNotExist = async () => {
    // Create `books` table if not exists
    await db.query(`
        CREATE TABLE IF NOT EXISTS books (
            id INT PRIMARY KEY AUTO_INCREMENT,
            category VARCHAR(50),
            name VARCHAR(100),
            publication VARCHAR(100),
            description TEXT,
            author VARCHAR(100)
        )
    `);

    // Create `articles` table if not exists
    await db.query(`
        CREATE TABLE IF NOT EXISTS articles (
            id INT PRIMARY KEY AUTO_INCREMENT,
            title VARCHAR(100),
            description TEXT,
            author VARCHAR(100),
            date DATE
        )
    `);

    // Create `about` table if not exists
    await db.query(`
        CREATE TABLE IF NOT EXISTS about (
            id INT PRIMARY KEY AUTO_INCREMENT,
            text TEXT
        )
    `);

    console.log('Tables are up to date');
};

connectToDatabase();

module.exports = db;
