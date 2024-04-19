const db = require('../config/db'); // Database connection

exports.getArticles = async () => {
    const [rows] = await db.query('SELECT * FROM articles ORDER BY date DESC');
    return rows;
};

exports.addArticle = async (title, description, author) => {
    const date = new Date();
    await db.query('INSERT INTO articles (title, description, author, date) VALUES (?, ?, ?, ?)',
        [title, description, author, date]);
};