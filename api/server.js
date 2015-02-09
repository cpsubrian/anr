var server = require('http').createServer()
  , io = require('socket.io')(server)
  , debug = require('debug')('socket');

io.on('connection', function(socket){
  debug('Connection', socket.id);
});

server.listen(3001, function(){
  console.log('listening on *:3001');
});