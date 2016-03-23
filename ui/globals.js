//assets
require('!!file?name=[name].[ext]!./index.html');
require('!!file?name=[name].[ext]!./bad-browser.html');

//polyfills
import 'babel-polyfill';

// Expose libraries provided by webpack
if (process.env.NODE_ENV == 'development') {
  window.Promise = window.bluebird = Promise;
  window.$ = window.jQuery = jQuery;
  window.axios = require('axios');
}

// bootstrap JS
import 'bootstrap';

//setup main scss
require('./style/index.scss');
require('font-awesome/css/font-awesome.css');
require('tether/dist/css/tether.min.css');
require('tether/dist/css/tether-theme-basic.min.css');


// IEMobile 10 bugfix for bootstrap
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.head.appendChild(msViewportStyle)
}
