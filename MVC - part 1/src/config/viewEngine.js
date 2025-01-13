const path = require('path');
const express = require('express');
const configViewEngine = (app) => {
    app.set('views', path.join('./src', 'views') ); // Đường dẫn đến thư mục views
    app.set('view engine', 'ejs'); // Đúng cú pháp: view engine
    // ***************************************************************************************
    // config static files
    app.use(express.static(path.join('./src', 'public'))); // Đường dẫn đến thư mục public
    // ***************************************************************************************

}

// Usage:
module.exports = configViewEngine;