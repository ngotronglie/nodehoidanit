
const express = require('express');
const {getHomePage, getAbout, hoiDanIT} = require('../controllers/HomeController');

const router = express.Router();



// Route



router.get('/', getHomePage);

router.get('/about', getAbout);

router.get('/hoiDanIT', hoiDanIT);

module.exports = router;

