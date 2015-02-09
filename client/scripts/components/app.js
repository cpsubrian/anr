var React = require('react')
  , cx = React.addons.classSet
  , Icon = require('_/components/icon');

var App = React.createClass({

  getInitialState: function () {
    return {
      clicked: false
    };
  },

  onClick: function (e) {
    e.preventDefault();
    this.setState({clicked: !this.state.clicked});
  },

  render: function () {
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