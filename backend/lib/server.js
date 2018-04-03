'use strict';

const express = require('express');

const PORT = process.env.PORT;

const app = express();

let isServerOn = false;
let httpServer = null;

app.all('*', (request, response) => {
  console.log('hello world');
  return response.sendStatus(404);
});

const server = (module.exports = {});

server.start = () => {
  return new Promise((resolve, reject) => {
    if(isServerOn) {
      console.log('ERROR: Server is already on');
      return reject(new Error('ERROR: Server is already on'));
    }
    if(!PORT) {
      console.log('ERROR: Port variable is not configured');
      return reject(new Error('ERROR: Port variable is not configured'));
    }
    httpServer = app.listen(PORT, () => {
      isServerOn = true;
      console.log(`Server is listening on port ${PORT}`);
      return resolve();
    });
  });
};

server.stop = () => {
  return new Promise((resolve, reject) => {
    if (!isServerOn) {
      console.log('ERROR: Server is already off');
      return reject(new Error('ERROR: Server is already off'));
    }
    if (!httpServer) {
      console.log('ERROR: server can\'t be shut down, server does not exist');
      return reject(new Error('ERROR: server can\'t be shut down, server does not exist'));
    }
    httpServer.close(() => {
      isServerOn = false;
      httpServer = null;
      console.log('Server is off');
      return resolve();
    });
  });
};