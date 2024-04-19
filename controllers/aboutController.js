const aboutModel = require('../models/aboutModel');

exports.getAbout = async (req, res) => {
    const aboutText = await aboutModel.getAboutText();
    res.render('about', { aboutText });
};

exports.updateAbout = async (req, res) => {
    const { text } = req.body;
    await aboutModel.updateAboutText(text);
    res.redirect('/about');
};