var http = require('http');
var data = '';
const server = http.createServer().listen(8080);

server.on('request', async(req, res) =>
{
  await waiting();
  console.log(req.url);
  res.write(data);
  res.end();
  data = '';
});

function Worker()
{
  data = 'Hello World!\n';
  console.log(data);
}

function waiting()
{
  setTimeout(Worker, Math.random() * 10000);
}