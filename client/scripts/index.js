'use strict';

var React = require('react')
  , App = require('scripts/components/app')
  , socket = require('scripts/socket');

require('bootstrap/dist/css/bootstrap.css');
require('fontawesome/css/font-awesome.css');
require('styles/app.css');

React.render(<App />, document.body);
