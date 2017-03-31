var request = require('request'); //om api calls te maken.
var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public')); //alle statische bestanden worden geserveerd vanuit de public folder. dus /css/style.css staat in public/css/style.css
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //to support url encoded bodies
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', function(req, res, body) {
    fs.readFile('./public/js/data.json', 'utf8', onRead);
    function onRead(err, data) {
        if (err) throw new Error(err);
        var contacts = JSON.parse(data);
        res.render('index', {contacts: contacts});
    }
});

app.post('/', function(req, res, body) {
    var search = req.body.q;
    fs.readFile('./public/js/data.json', 'utf8', onRead);
    function onRead(err, data) {
        var contacts = JSON.parse(data);
        res.render('index', {contacts: contacts.filter(contacts => contacts.first_name.includes(search))});
    }
});

app.get('/:first_name', function(req, res) {
    var id = req.params.first_name;
    fs.readFile('./public/js/data.json', 'utf8', onRead);
    function onRead(err, data) {
        if (err) throw new Error(err);
        var contacts = JSON.parse(data);
        res.render('detail', {contacts: contacts.filter(contacts => contacts.first_name.includes(id))});
    }
});

var server = app.listen(3000, function () {
  console.log('server running on port 3000');
});
