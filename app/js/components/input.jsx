var React = require('react');
var ReactDOM = require('react-dom');
var classnames = require('classnames');

module.exports = React.createClass({
  
  getInitialState: function() {
    return {
      focus: false,
      empty: this.props.value === '',
    };
  },

  handleChange: function(e) {
    this.props.onChange(e)
  },

  handleFocus: function() {
    this.setState({
      focus: true
    });
  },

  handleBlur: function() {
    this.setState({
      focus: false,
      empty: this.props.value === ''
    });
  },

  componentWillReceiveProps: function(newProps) {
    if(newProps.value === '') this.setState({empty: true})
  },

  render: function() {

    var classes = classnames({active: this.state.focus, filled: !this.state.empty}, this.props.className, this.props.type)

    return(
      <div className={classes}>

        <label className='input-label' htmlFor={this.props.text}>
          <span className='label-text'>{this.props.text}</span>
        </label>

        <input
          {...this.props}
          className='input'
          id={this.props.text}
          value={this.props.value}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </div>
    );
  }

});

