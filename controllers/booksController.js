const bookModel = require('../models/bookModel');

exports.getBooks = async (req, res) => {
    const categories = await bookModel.getCategories();
    res.render('books', { categories });
};

exports.getBooksByCategory = async (req, res) => {
    const category = req.params.category;
    const books = await bookModel.getBooksByCategory(category);
    res.render('books', { books, category });
};

exports.addBook = async (req, res) => {
    const { category, name, publication, description, author } = req.body;
    await bookModel.addBook(category, name, publication, description, author);
    res.redirect(`/books/${category}`);
};