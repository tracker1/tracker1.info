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
app.use('/ui', express.static(path.resolve(__dirname, '../ui')));
app.use('/content', express.static(path.resolve(__dirname, '../../content')));

app.get('/bad-browser.html', function(req,res) {
  res.sendFile(path.resolve(__dirname, '../ui/bad-browser.html'));
});

// wildcard failover
app.get('*', function(req,res,next) {
  res.sendFile(path.resolve(__dirname, '../ui/index.html'));
});

app.listen(8080, function(err){
  console.log('Listening on http://localhost:8080/')
});
