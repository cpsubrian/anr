var React = require('react');

var Panel = React.createClass({

  render: function () {
    var classes = ['panel',  'panel-default', 'flow-' + (this.props.vertical ? 'vertical' : 'horizontal')];
    if (this.props.className) {
      classes.push(this.props.className);
    }

    var style = {};
    if (this.props.width) {
      style.flex = '0 0';
      style.flexBasis = this.props.width;
    }

    return (
      <div className={classes.join(' ')} style={style}>
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