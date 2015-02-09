'use strict';

var React = require('react')
  , _ = require('underscore');

var Icon = React.createClass({

  render: function () {
    var type = _.first(_.keys(this.props));
    return (
      <i className={'fa fa-' + type}></i>
    );
  }

});

module.exports = Icon;