require('node-jsx').install({extension: '.jsx'});

var express = require('express'),
    app = express(),
    path = require('path'),
    fs = require('fs'),
    Handlebars = require('handlebars'),
    browserify = require('browserify-middleware'),
    reactify = require('reactify'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server');

var index = Handlebars.compile(fs.readFileSync(__dirname + '/index.html', 'utf8'));

app
  .get('/', function(req, res, next) {
    var props = { name: 'Eugene ' + Date.now() },
        script = "var props = " + JSON.stringify(props) + ";",
        app = React.createFactory(require('./app.jsx'));
    res.send(index({ react: ReactDOMServer.renderToString(app(props)), script: script }));
  })
  .use('/bundle.js', browserify(__dirname + '/client.js', { transform: ['reactify'] }));

app.listen(process.env.PORT || 3000);
