const articleModel = require('../models/articleModel');

exports.getArticles = async (req, res) => {
    const articles = await articleModel.getArticles();
    res.render('articles', { articles });
};

exports.addArticle = async (req, res) => {
    const { title, description, author } = req.body;
    await articleModel.addArticle(title, description, author);
    res.redirect('/articles');
};