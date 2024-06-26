const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');

router.get('/', articlesController.getArticles);
router.post('/', articlesController.addArticle);

module.exports = router;