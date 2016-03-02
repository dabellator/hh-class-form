var React = require('react');
var ReactDOM = require('react-dom');
var App = require(__dirname + '/containers/app.jsx');

window.onload = function() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

