var webpack = require('webpack');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss       = require('precss');
var path = require('path');

var root = path.resolve(__dirname);

var ExtractCss = new ExtractTextWebpackPlugin('styles.css')

var config = {

  entry: [
    './ui/globals.js',
    './ui/index.js'
  ],
  
  resolve: {
    extensions: ['', '.js'],
    alias: {
      lib: path.resolve(__dirname, 'lib'),
      ui: path.resolve(__dirname, 'ui'), 
      store: path.resolve(__dirname, 'ui/store'),
      feature: path.resolve(__dirname, 'ui/feature')
    }
  },
  
  output: {
    path: __dirname + '/dist/ui',
    publicPath: '/ui',
    filename: "bundle.js",
    chunkFilename: 'bundle.chunk-[name].js'  // for loazy loading chunk js file for the module
  },
  
  module: {
    loaders: [

      // load and compile javascript
      { test: /\.js$/, exclude: /node_modules/, loader:"babel" },

      // load css and scss
      { 
        test: /\.css$/, 
        loader: ExtractCss.extract(['css','postcss'])
      },
      {
        test: /\.scss$/,
        loader: ExtractCss.extract(['css','postcss?pack=scss','sass'])
      },

      // load JSON files and HTML
      { test: /\.json$/, loader: "json" },
      { test: /\.html$/, exclude: /node_modules/, loader:"raw" },

      // load fonts (woff/woff2 inlined)
      { test: /\.(ttf|eot|svg|otf)([\?\#].+)?$/, loader: "file?name=[name]_[hash].[ext]" },
      { test: /\.woff([\?\#].+)?$/, loader: "url?mimetype=application/font-woff&name=/[name]_[hash].[ext]"},
      { test: /\.woff2([\?\#].+)?$/, loader: "url?mimetype=application/font-woff2&name=/[name]_[hash].[ext]"},

      // load images (inline base64 URLs for <=8k images)
      { test: /\.(png|jpg|gif)([\?\#].+)?$/, loader: 'file?name=[name]_[hash].[ext]'}
    ]
  },

  // inject js bundle to index.html
  plugins: [
    
    ExtractCss,
    
    new webpack.optimize.DedupePlugin(),
    
    new webpack.optimize.OccurenceOrderPlugin(),
    
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    }),
            
    new webpack.ProvidePlugin({
      Promise: 'bluebird',
      jQuery: 'jquery',
      $: 'jquery',
      Tether: 'tether', 
      'window.Tether': 'tether'
    }),
    
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false
    })
  ],

  // support source maps
  devtool: null, //'source-map',
  
  sassLoader: {
    //needed for autoprefixer and url/file
    sourceMap:false,
    sourceMapContents:false,
    outputStyle:'compact',
    
    // NOTE: each path adds seconds to the build-time
    includePaths:[root+'/ui/style']
  },
  
  postcss: function () {
    return {
      defaults: [autoprefixer, precss],
      scss: [autoprefixer]
    };
  }
};


module.exports = config;