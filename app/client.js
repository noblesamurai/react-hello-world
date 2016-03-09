var React = require('react'),
    ReactDOM = require('react-dom'),
    reactApp = React.createFactory(require('./app.jsx'));

ReactDOM.render(reactApp(props), document.getElementById('root'));
