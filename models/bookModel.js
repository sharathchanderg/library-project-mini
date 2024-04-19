const db = require('../config/db'); // Database connection

exports.getCategories = async () => {
    const [rows] = await db.query('SELECT DISTINCT category FROM books');
    return rows.map(row => row.category);
};

exports.getBooksByCategory = async (category) => {
    const [rows] = await db.query('SELECT * FROM books WHERE category = ?', [category]);
    return rows;
};

exports.addBook = async (category, name, publication, description, author) => {
    await db.query('INSERT INTO books (category, name, publication, description, author) VALUES (?, ?, ?, ?, ?)',
        [category, name, publication, description, author]);
};