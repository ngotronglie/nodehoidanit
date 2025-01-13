require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
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

// Start server
app.listen(port,hostname, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
