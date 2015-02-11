var React = require('react');

var StatsCorp = React.createClass({

  render: function () {
    return (
      <div className="stats-corp">
        <div className="credits">
          <i className="nr nr-credit stat"></i><span className="count">8</span>
        </div>
        <div className="badpub">
          <span className="stat">BP</span><span className="count">0</span>
        </div>
        <div className="handsize">
          <span className="stat">Hand</span><span className="count">4</span><span className="total">/5</span>
        </div>
      </div>
    );
  }

});

module.exports = StatsCorp;