const express = require('express');

// import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/abc', (req, res) => {
  res.send('abc page');
});

app.get('/ngotrongliem', (req, res) => {
  res.send('</h1>ngotrongliem</h1>');
});

app.listen(port, () =>{
  console.log(`Example app listening at http://localhost:${port}`);
})
