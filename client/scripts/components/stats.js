var React = require('react')
  , StatsRunner = require('_/components/stats_runner')
  , StatsCorp = require('_/components/stats_corp');

var Stats = React.createClass({

  render: function () {
    return (
      <div className="stats">
        {this.props.player.type === 'runner' ?
          <StatsRunner player={this.props.player}/>
        :
          <StatsCorp player={this.props.player}/>
        }
      </div>
    );
  }

});

module.exports = Stats;