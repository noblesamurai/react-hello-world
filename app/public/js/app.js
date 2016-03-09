var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
 render: function() {
   return (<div>Hello, {this.props.name}!</div>);
 }
});

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
