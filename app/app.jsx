var React = require('react'),
    Hello = require('./components/hello.jsx');

module.exports = React.createClass({
  render: function () {
    return <Hello name={this.props.name} />;
  }
});
