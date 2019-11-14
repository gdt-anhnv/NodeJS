var fs = require('fs');
var http = require('http');
var ILog = require('./modules/logdata/ilog');
var ConsoleLog = require('./modules/logdata/console_log');

var options =
{
    host: 'localhost',
    port: 8080,
    path: '/?crypto=SHA256&data=abc'
};

var data = '';
callback = function(response)
{
    response.on('data', function(chunk)
    {
        data += chunk;
    });

    response.on('end', function()
    {
        console.log(data);
        fs.appendFile('test.txt', data, function(err)
        {
            if(err)
            {
                var log = Object.create(ConsoleLog);
                log.data = err;
                log.Display();
                throw err;
            }
        });

        data = '';
    });
}

request = function(op, cb)
{
    var req = http.request(op, cb).end();
}

var request_loop = setInterval(function()
{
    request(options, callback);
}, 1000);
