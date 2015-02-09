'use strict';

var React = require('react');

var Icon = React.createClass({

  render() {
    var type = Object.keys(this.props)[0];
    return (
      <i className={'fa fa-' + type}></i>
    );
  }

});

module.exports = Icon;