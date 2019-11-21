const http = require('http');
const url = require('url');
const QuerySearch = require('query-string');

var data = '';
const server = http.createServer().listen(8080);

server.on('request', async(req, res) =>
{
  await waiting();
  const req_url = url.parse(req.url);
  console.log(req_url.search);
  if(data != '')
  {
    res.write(data);
    data = '';
  }
  else
  {
    res.write('no data');
  }
  res.end();
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