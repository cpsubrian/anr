var React = require('react');

var Panel = React.createClass({

  getDefaultProps: function () {
    return {
      flow: 'horizontal'
    }
  },

  render: function () {
    var classes = ['panel',  'panel-default', 'flow-' + this.props.flow];
    if (this.props.className) {
      classes.push(this.props.className);
    }
    return (
      <div className={classes.join(' ')}>
        {this.props.title ?
          <div className="panel-heading">
            <h3 className="panel-title">{this.props.title}</h3>
          </div>
        : ''}
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }

});

module.exports = Panel;