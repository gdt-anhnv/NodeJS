const net = require('net');

var client = new net.Socket();
client.connect(8001, 'localhost', function()
{
    console.log('Connected');
});

client.on('data', function(data)
{
    console.log('received: ' + data);
    client.destroy();
});

client.on('close', function()
{
    console.log('closed');
})