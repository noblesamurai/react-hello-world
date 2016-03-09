var express = require('express'),
    app = express(),
    path = require('path'),
    browserify = require('browserify-middleware')
    reactify = require('reactify');

var browserifyPath = path.join(__dirname, 'public', 'js', 'app.js');

app
  .use('/js/app.js', browserify(browserifyPath, { transform: ['reactify'] }))
  .use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000);
