var express = require('express');
var path = require('path');
var http = require('http');

var expressHandlebars = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3002;

app.set('views', __dirname + '/views');
app.set('view engine','hbs');

app.engine('hbs', expressHandlebars({
	extname:'.hbs',
	layoutsDir:'views/pages',
	partialsDir:'views',
	defaultLayout:'layout',})
);
app.use(express.static(path.join(__dirname, '/views/public')));

var staticroutes = require('./routes/staticroutes');

app.get('/', staticroutes.home);


app.get('*', function(req, res) {
	res.redirect('/');
});

http.createServer(app).listen(port,function(req, res) {
	console.log('Express Server running on port :' + port);
});