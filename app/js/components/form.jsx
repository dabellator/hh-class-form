var React = require('react');
var RadioGroup = require('react-radio-group');
var Input = require(__dirname + '/input.jsx');
var classnames = require('classnames');

module.exports = React.createClass({

  defaultState: {
      name: '',
      timeframe: 'daily',
      privateClass: true,
      classType: '',
      minAge: '',
      roomLocation: '',
      maxAge: '',
      maxClassSize: '',
      description: '',
      descriptionFocus: false
  },

  getInitialState: function() {
    return this.defaultState;
  },

  handleChange: function(e) {
    var newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  },

  changeTimeframe: function(e) {
    this.setState({timeframe: e.target.value});
  },

  privateChange: function() {
    this.setState({privateClass: !this.state.privateClass});
  },

  resetState: function() {
    this.setState(this.defaultState);
  },

  focusIn: function() {
    this.setState({descriptionFocus: true});
  },

  focusOut: function() {
    if (this.state.description === '') this.setState({descriptionFocus: false});
  },

  saveAndContinue: function(e) {
    e.preventDefault();
    console.log('all done');
  },

  render: function() {
    var classes = classnames({active: this.state.descriptionFocus}, 'textarea form-full');

    return (
      <div className='form-wrapper'>
        <form onSubmit={this.saveAndContinue}>
          <section className='form-first'>
            <Input
              text='Class Name'
              type='text'
              name='name'
              className='form-full'
              value={this.state.name}
              onChange={this.handleChange}
            />

            <fieldset id='timeframe'>
              <input
                name='timeframe'
                id='daily'
                type='radio'
                value='daily'
                checked={this.state.timeframe === 'daily'}
                onChange={this.changeTimeframe} />
              <label htmlFor='daily'>Daily</label>
              <input
                name='timeframe'
                id='weekly'
                type='radio' 
                value='weekly' 
                checked={this.state.timeframe === 'weekly'}
                onChange={this.changeTimeframe} />
              <label htmlFor='weekly'>Weekly</label>
              <input
                name='timeframe'
                type='radio' 
                value='monthly'
                id='monthly' 
                checked={this.state.timeframe === 'monthly'}
                onChange={this.changeTimeframe} />
              <label htmlFor='monthly'>Monthly</label>
            </fieldset>

            <div className='form-half checkbox'>
              <input
                id='private'
                type='checkbox'
                checked={this.state.privateClass}
                onChange={this.privateChange}
              />
              <label className='input-label' htmlFor='private'>Make this class private</label>        
            </div>

            <Input
              text='Room Location'
              type='text'
              name='roomLocation'
              value={this.state.roomLocation}
              className='form-half'
              onChange={this.handleChange}
            />
            <Input
              text='Class Type'
              type='text'
              name='classType'
              value={this.state.classType}
              className='form-half'
              onChange={this.handleChange}
            />
            <Input
              text='Maximum Age'
              type='text'
              name='maxAge'
              value={this.state.maxAge}
              className='form-half'
              onChange={this.handleChange}
            />
            <Input
              text='Minimum Age'
              type='text'
              name='minAge'
              value={this.state.minAge}
              className='form-half'
              onChange={this.handleChange}
            />
            <Input
              text='Maximum Class Size'
              type='text'
              name='maxClassSize'
              value={this.state.maxClassSize}
              className='form-half'
              onChange={this.handleChange}
            />

            <div className={classes}>
              <label htmlFor='description'>Description</label>
              <textarea
                id='description'
                rows={8}
                name='description'
                value={this.state.description}
                onChange={this.handleChange}
                onFocus={this.focusIn}
                onBlur={this.focusOut}
              />
            </div>
          </section>  
          <div className='form-buttons'>
            <button
              type='button'
              className='button button-cancel'
              onClick={this.resetState}>
              Cancel
            </button>
            <button
              type="submit"
              className="button button-submit">
              Next Step
            </button>
          </div>
        </form>
      </div>
    );
  }
});

