
var socket = io.connect('http://localhost:3000');

console.log('hello new client');

function joinRoom(){
  socket.emit('joinRoom', 1);
}
