var express = require('express');
var compression = require('compression');
var path = require('path');
//var api = require('./api');

// existing express server
var app = express();

//compress all requests - best compression
app.use(compression({level:9}));

//dist directory should have *ALL* resources and assets
//TODO: update to match prod
app.use('/', express.static(__dirname + '/../dist/'));
app.use('/assets', express.static(path.resolve(__dirname, '../../assets')));

// wildcard failover
app.get('*', function(req,res) {
  res.sendFile(path.resolve(__dirname, '../ui/index.html');
});

// mount api routes - TODO: Test This
/*
app.use(/\/arms\/admin\/(.*)/, requestProxy({
	url: "https://TODO_API_E1/arms/admin/:0",
	query: {
	  secret_key: process.env.SOMEAPI_SECRET_KEY
	},
	headers: {
		'X-Custom-Header': process.env.SOMEAPI_CUSTOM_HEADER
	}
}));
*/

app.listen(8080, function(err){
  console.log('Listening on http://localhost:8080/')
});
