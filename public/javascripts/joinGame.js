
var socket = io.connect('http://localhost:3000');

console.log('hello new client');

socket.emit('getPlayers', 1);

socket.on('playersInRoom', displayPlayers);


function displayPlayers(data){
  console.log(data);
  let html = '';
  players.forEach(player => {
    html+= '<li>'+player+'</li>';
  })
  document.getElementById('players').innerHTML=html;
}
