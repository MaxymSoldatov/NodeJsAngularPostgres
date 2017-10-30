

var express  = require('express');
var logger   = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var colours = require('colors');
var favicon = require( 'serve-favicon' );




var routes = require('./server/routes.js');


var app = express();
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.set('port', process.env.PORT || 3000);


app.use(express.static(__dirname + '/public')); 



app.use(logger('dev'));
app.use(bodyParser.json())



routes(app);



var server = http.createServer(app);


server.listen(app.get('port'), function() {
  console.log('Express HTTP server listening on port ' .red + app.get('port') ) ;
});

