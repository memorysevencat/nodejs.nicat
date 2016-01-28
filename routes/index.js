var express = require('express');
var router = express.Router();

/* GET home page. */
//nicat set the homepage
router.get('/', function (req, res, next) {
    res.render('home', {title: 'homepage'});
});
//nicat login
router.get('/login', function (req, res, next) {
    res.render('login', {title: 'login'});
});
var user = {
    username: 'nicat',
    password: 'nicat'
};
router.post('/login', function (req, res, next) {
    if (req.body.username === user.username && req.body.password === user.password) {
        req.session.user = user;
        res.render('home', {title: 'welcome to homepage'});
    } else {
        res.render('login', {title: 'failed to login.try again'});
    }
});

router.get('/index', function (req, res, next) {
    res.render('index', {title: 'index'});
});

module.exports = router;
