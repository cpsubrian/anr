var React = require('react')
  , Panel = require('_/components/panel')
  , Stats = require('_/components/stats')
  , Table = require('_/components/table')
  , Flow = require('_/components/flow')
  , Chat = require('_/components/chat');

var App = React.createClass({

  render: function () {
    return (
      <Panel className="app">
        <Panel title="Stats" flow="vertical">
          <Panel title="Opponent">
            <Stats/>
          </Panel>
          <Panel title="You">
            <Stats/>
          </Panel>
        </Panel>
        <Panel title="Table">
          <Table/>
        </Panel>
        <Panel title="Actions" flow="vertical">
          <Panel title="Flow">
            <Flow/>
          </Panel>
          <Panel title="Chat">
            <Chat/>
          </Panel>
        </Panel>
      </Panel>
    );
  }
});

module.exports = App;