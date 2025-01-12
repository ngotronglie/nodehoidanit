const express = require('express');
const port = process.env.PORT || 3000;

class Server {
  constructor() {
    this.app = express();
    this.port = port; 
  }

  start() {
    this.app.get('/', (req, res) => {
      res.send('Hello World!');
    });
    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`);
    });
  }
}

const server = new Server();
server.start();