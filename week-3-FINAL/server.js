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
   // req.body.q code schrijven -> filter
   var contacts = JSON.parse(data);

   res.render('index', {contacts: contacts});
 }
});

//here we have the base. If we have /form in the url we render the form.ejs.
app.post('/', function(req, res, body) {
    var search = req.body.q;
    fs.readFile('./public/js/data.json', 'utf8', onRead);

    function onRead(err, data) {
        var contacts = JSON.parse(data);
        res.render('index', {contacts: contacts.filter(contacts => contacts.first_name.includes(search))});
    }
});

// app.get('/', function(req, res) {
//     // var userInput = typeof(req.body.q) != 'undefined' ? req.body.q : '';
//     var userInput = req.body.q;
//     fs.readFile('./public/js/data.json', 'utf8', onRead);
//     console.log(userInput);
//     function onRead(err, data) {
//         var json = JSON.parse(data);
//         var filteredJson = json.filter(function (name) {
//             if (name.first_name == userInput) {
//                 // return true;
//             } else {
//                 // return false;
//             }
//          });
//       if (err) throw new Error(err);
//       res.render('index', {contacts: json, q: filteredJson});
//     }
// });
//
// app.post('/result', function(req, res) {
//     var userInput = req.body.place;
//     fs.readFile('./public/js/data.json', 'utf8', onRead);
//     // res.send(req.body.place);
//     function onRead(err, data) {
//         var json = JSON.parse(data);
//         var filteredJson = json.filter(function (name) {
//             if (name.first_name == userInput) {
//                 return true;
//             } else {
//                 return false;
//             }
//          });
//         res.render('result', {contacts: filteredJson});
//     }
// });

//wanneer we node server.js runnen dan zetten we de server op met onderstaande code.
//we zetten de port op 3000 en de app luistert naar deze port. local.3000
var server = app.listen(3000, function () {
  console.log('server running on port 3000');
});
