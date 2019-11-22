const net = require('net');
const http = require('http');

const server = http.createServer().listen(8080);
var socket = new net.Socket();
socket.connect(8001, 'localhost', function()
{
    console.log('Connected');
});

server.on('request', function(req, res)
{
    res.write('Hello World!');
    res.end();

    console.log('ping server');

    socket.emit('client request', {my : 'data data'});
});

socket.on('data', function(data)
{
    console.log('server respond: ' + data);
});

socket.on('close', function()
{
    console.log('Connection closed');
});
