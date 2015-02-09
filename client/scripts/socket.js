var io = require('socket.io-client')
  , socket = io.connect('http://localhost:3001');

// Custom logging functions.
socket.log = function () {
  var args = Array.prototype.slice.call(arguments);
  args.unshift('[SOCKET]');
  if (console) console.log.apply(console, args);
};
socket.error = function () {
  var args = Array.prototype.slice.call(arguments);
  args.unshift('[SOCKET]');
  if (console) console.error.apply(console, args);
};

// List for connection-related events.
socket.on('connect', function () {
  socket.log('Connected', socket.id);
});
socket.on('error', function (err) {
  socket.error('Error', err);
});
socket.on('disconnect', function () {
  socket.log('Disconnected', socket.id);
});
socket.on('reconnect', function (attempt) {
  socket.log('Reconnected (on attempt ' + attempt + ')', socket.id);
});
socket.on('reconnecting', function (attempt_num) {
  socket.log('Reconnecting (attempt ' + attempt_num + ')');
});
socket.on('reconnect_error', function (err) {
  socket.error('Reconnect Error', err);
});
socket.on('reconnect_failed', function () {
  socket.error('Reconnect Failed');
});

module.exports = socket;