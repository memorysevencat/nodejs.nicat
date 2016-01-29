var express = require('express');
var router = express.Router();

/* GET home page. */
//nicat set the homepage
router.get('/', function (req, res, next) {
    res.render('signin', {title: 'welcome! sign in'});
});
//nicat
router.get('/signin', function (req, res, next) {
    res.render('signin', {title: 'signin'});
});
router.get('/signup', function (req, res, next) {
    res.render('signup', {title: 'welcome! sign up'});
});
router.get('/signout', function (req, res, next) {
    res.render('signin', {title: ''});
});
var user = {
    username: 'nicat',
    password: 'nicat'
};
router.post('/signin', function (req, res, next) {
    if (req.body.username === user.username && req.body.password === user.password) {
        req.session.user = user;
        res.render('home', {title: 'success!welcome :' + req.body.username, content: 'u can check the session'});
    } else {
        res.render('signin', {title: 'failed to login.try again'});
    }
});
router.post('/signup', function (req, res, next) {
    user.username = req.body.username;
    user.username = req.body.password;
    req.session.user = user;
    res.render('home', {title: 'success!welcome :' + req.body.username, content: 'u can check the session'});
});
router.get('/index', function (req, res, next) {
    res.render('index', {title: 'index'});
});

module.exports = router;
