const net = require('net');
const http = require('http');
const sleep = require('sleep');

const server = http.createServer().listen(8088);
var socket = new net.Socket();
socket.connect(8001, 'localhost', function()
{
    console.log('Connected');
});

server.on('request', function(req, res)
{
    res.write('Hello World!');
    res.end();

    for(var i = 0; i < 10; i++)
    {
        if(null != socket)
        {
            sleep.msleep(Math.floor(Math.random()) * 1000 + 2000);
            console.log('ping server');
            socket.write('data2\n');
        }
    }
});

socket.on('data', function(data)
{
    console.log('server respond: ' + data);
});

socket.on('close', function()
{
    console.log('Connection closed');
    socket.destroy();
    socket = null;
});
