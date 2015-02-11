var React = require('react');

var StatsRunner = React.createClass({

  render: function () {
    return (
      <div className="stats-runner">
        <div className="credits">
          <i className="nr nr-credit stat"></i>
          <span className="count">11</span>
        </div>
        <div className="link">
          <i className="nr nr-link stat"></i>
          <span className="count">1</span>
        </div>
        <div className="memory">
          <i className="nr nr-mu stat"></i>
          <span className="count">4</span>
        </div>
        <div className="tags">
          <span className="stat">Tags</span>
          <span className="count">0</span>
        </div>
        <div className="brain">
          <span className="stat">BD</span>
          <span className="count">0</span>
        </div>
        <div className="handsize">
          <span className="stat">Hand</span>
          <span className="count">5</span>
          <span className="total">/5</span>
        </div>
      </div>
    );
  }

});

module.exports = StatsRunner;