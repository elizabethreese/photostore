var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.use(session({
    secret: 'temporarySecretKey',
    resave: false, 
    saveUninitialized: true,
    cookie: { maxAge: 100000000}
}));

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

app.listen(3000, function(){
    console.log("listening...")
})