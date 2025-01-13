const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8888;
const hostname = 'localhost';

// Config template engine
app.set('views', path.join(__dirname, 'views') ); // Đường dẫn đến thư mục views
app.set('view engine', 'ejs'); // Đúng cú pháp: view engine

// ***************************************************************************************
// config static files
app.use(express.static(path.join(__dirname, 'public'))); // Đường dẫn đến thư mục public
// ***************************************************************************************

// Route
app.get('/', (req, res) => {
  res.render('sample'); 
});

// Start server
app.listen(port,hostname, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
