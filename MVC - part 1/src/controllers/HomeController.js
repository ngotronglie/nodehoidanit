const getHomePage = (req, res) => {
    // prosess data 
    // call model
    res.send('Home page');
}

const getAbout = (req, res) => {
    res.send('about page');
}
const hoiDanIT = (req, res) => {
    res.render('sample')
}
module.exports = {
    getHomePage, getAbout,hoiDanIT
}