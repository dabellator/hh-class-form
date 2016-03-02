var React = require('react');

var SmallMenu = React.createClass({
  render: function() {
    return (
      <nav className='small-menu'>
        <img src='images/small_menu.png' />
      </nav>
    )
  }
});

var FormCrumb = React.createClass({
  render: function() {
  
    var self = this;
    return (
      <ul className='form-crumb'>
        {this.props.steps.map(function(crumb, i) {
          console.log(self.props, i); 
          var style = '';
          if(self.props.current === i) style = 'active';
          return <li key={i} className={style}>{crumb}
            {(i !== self.props.steps.length - 1 ? <span>></span> : null)}</li>;
        })}
      </ul>
    )
  }
});

module.exports = React.createClass({

  getInitialState: function() {
    return {
      steps: ['Details', 'Schedule', 'Payment', 'Confirm']
    };
  },

  render: function() {
    return (
      <header className='header-wrapper'>
        <h2 className='form-header'>Create a Class</h2>
        <SmallMenu />
        <FormCrumb
          steps={this.state.steps}
          current={this.props.current}
        />
      </header>
    )
  }
});

