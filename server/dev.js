import express from 'express';

import path from 'path';
import webpack from 'webpack';

//import {api} from './api';
import webpackConfig from '../webpack.config';

const compiler = webpack(webpackConfig);

// express server
const app = express();

//app.use('/api', api);

app.get('/', function(req,res) {
  res.sendFile(path.resolve(__dirname, '../ui/dev-index.html'));
});

app.use('/assets', express.static(path.resolve(__dirname, '../assets')));

// webpack dev server will also serve /assets
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));


app.listen(8080, function(err){
  console.log('Listening on http://localhost:8080/ \nWait for "webpack built" notice before connecting.')
});
