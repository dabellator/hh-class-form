var React = require('react');
var ReactDom = require('react-dom');
var HeaderBox = require(__dirname + '/../components/header.jsx');
var ClassForm = require(__dirname + '/../components/form.jsx');

var App = React.createClass({
  getInitialState: function() {
    return {
      current: 0
    }
  },

  render: function() {
    return (
      <div className="wrapper">
        <HeaderBox current={this.state.current} />
        <ClassForm />
      </div>
    )
  }
});

module.exports = App;

