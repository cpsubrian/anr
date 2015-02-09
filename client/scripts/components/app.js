'use strict';

var React = require('react')
  , Icon = require('./icon');

var App = React.createClass({

  getInitialState() {
    return {
      clicked: false
    };
  },

  buttonStyle() {
    return {
      color: '#fff',
      backgroundColor: this.state.clicked ? 'red' : 'cyan',
      padding: 20
    };
  },

  onClick(e) {
    e.preventDefault();
    this.setState({clicked: !this.state.clicked});
  },

  render() {
    return (
      <section className="App">
        <h1>Hello, world.</h1>
        <p>This is my paragraph text <Icon type="eye"/></p>
        <button style={this.buttonStyle()} onClick={this.onClick}>Click Me</button>
      </section>
    );
  }
});

module.exports = App;