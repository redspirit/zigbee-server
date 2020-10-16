
const socket = require('socket.io-client')('http://chat.aniavatars.com');

socket.on('connect', () => {
    console.log('>> connect');
});
socket.on('event', (data) => {
    console.log('>> event', data);
});
socket.on('disconnect', () => {
    console.log('>> disconnect');
});