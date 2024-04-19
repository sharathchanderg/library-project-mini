const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.get('/', booksController.getBooks);
router.get('/:category', booksController.getBooksByCategory);
router.post('/add', booksController.addBook);

module.exports = router;