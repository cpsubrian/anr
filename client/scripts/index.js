var React = require('react')
  , App = require('_/components/app')
  , socket = require('_/socket');

// Load styles.
require('bootstrap/dist/css/bootstrap.css');
require('fontawesome/css/font-awesome.css');
require('styles/app.css');

// Render app.
React.render(<App />, document.body);
