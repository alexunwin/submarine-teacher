var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/update', function(req, res) {
    var load = work;
    work = [];
    res.send(load);
});

app.post('/cmd', function(req, res) {
    if(!req.body && !req.body.cmd) {
        res.send('no cmd sent');
        return;
    }

    addWork(req.body.cmd);
    res.send();
});

var work = [];
function addWork(cmd) {
    work.push(cmd)
}

var server = app.listen(4000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Overlord listening at http://%s:%s', host, port);
});
