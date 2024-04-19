const express = require('express');
const path = require('path');
const app = express();

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Parse incoming form data
app.use(express.urlencoded({ extended: true }));

// Import routes
const aboutRoutes = require('./routes/aboutRoutes');
const booksRoutes = require('./routes/booksRoutes');
const articlesRoutes = require('./routes/articlesRoutes');

// Define routes
app.use('/about', aboutRoutes);
app.use('/books', booksRoutes);
app.use('/articles', articlesRoutes);

// Home route (redirect to About Us)
app.get('/', (req, res) => {
    res.redirect('/about');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
