'use strict';

var React = require('react')
  , cx = React.addons.classSet
  , Icon = require('components/icon');

var App = React.createClass({

  getInitialState() {
    return {
      clicked: false
    };
  },

  onClick(e) {
    e.preventDefault();
    this.setState({clicked: !this.state.clicked});
  },

  render() {
    var buttonClass = cx({
      'btn': true,
      'btn-primary': !this.state.clicked,
      'btn-danger': this.state.clicked
    });

    return (
      <section className="App">
        <h1>Hello, world.</h1>
        <p>This is my paragraph text <Icon eye/></p>
        <button className={buttonClass} onClick={this.onClick}>
          Click Me
        </button>
      </section>
    );
  }
});

module.exports = App;