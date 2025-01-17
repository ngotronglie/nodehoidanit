require('dotenv').config();
const express = require('express');
const connection = require('./config/database');
const configViewEngine = require('./config/viewEngine');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 8888;
const hostname = 'localhost';
const webRouter = require('./routes/web');
// // Config template engine loai bo khi co file config/viewEngine.js
// app.set('views', path.join(__dirname, 'views') ); // Đường dẫn đến thư mục views
// app.set('view engine', 'ejs'); // Đúng cú pháp: view engine
configViewEngine(app);

app.use('/', webRouter);
app.use('/about', webRouter);

// test Connection to Database

connection.query(
  'SELECT * FROM Users u',
  function(err, results, fields) {
    console.log(">>> results: " , results); // results contains rows returned by server
    console.log(">>> fields: " ,fields); // fields contains extra meta data about results, if available
  }
)
// Start server
app.listen(port,hostname, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
