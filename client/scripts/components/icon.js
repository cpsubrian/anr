'use strict';

var React = require('react');

var Icon = React.createClass({

  render() {
    return (
      <i className={'fa fa-' + this.props.type}></i>
    );
  }

});

module.exports = Icon;