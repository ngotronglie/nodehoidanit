
const express = require('express');

const router = express.Router();

// Route
router.get('/', (req, res) => {
  res.render('sample'); 
});

router.get('/about', (req, res) => {
    res.render('about'); 
    });

module.exports = router;

