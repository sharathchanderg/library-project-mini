const db = require('../config/db'); // Database connection

exports.getAboutText = async () => {
    const [rows] = await db.execute('SELECT text FROM about WHERE id = 1');
    return rows[0] ? rows[0].text : '';
};

exports.updateAboutText = async (text) => {
    await db.execute('UPDATE about SET text = ? WHERE id = 1', [text]);
};