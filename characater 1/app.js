const { createServer } = require('http'); 

const hostname = '127.0.0.1'; // localhost
const port = 6969;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n Liem danng hoc node js !');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
