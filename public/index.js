// Get all the required libraries
var express = require('express');
var bodyParser = require('body-parser');

// Create the express app
var app = express();

// Setup our middleware
app.use(bodyParser.urlencoded({ extended: false }))

// Setup the ejs view engine
app.set('view engine', 'ejs');
app.set('views', '../app/views');

// 
app.get("/", function (req, res, next) {
    res.render('index.ejs');
})

/*
//saving value to session
app.get("/valuetoSession", function (req, res, next) {
    var param = req.query.param;
    req.session.param = param;
    res.send("it worked");
});

//displaying value to session
app.get("/displaytoSession", function (req, res, next) {
    var param = req.session.param;
    res.send(param);
})
*/

app.listen(3000, function () {
    console.log("listening...")
})