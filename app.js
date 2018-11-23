const path = require("path");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const userList = [];

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', (req, res, next) => {
    const lists = userList;
    res.render('users', {lists: lists, pageTitle: 'List of Users', path: '/users'});
});

app.get('/', (req, res, next) => {
    res.render('home', {pageTitle: 'Home', path: '/'});
});

app.post('/', (req, res, next) => {
    userList.push({name: req.body.name});
    res.redirect('/users');
});

app.listen(8080);