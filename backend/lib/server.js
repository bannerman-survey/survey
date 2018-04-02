'use strict';

const express = require('express');

const PORT = process.env.PORT;

const app = express();

app.all('*', (request, response) => {
  console.log('hello world');
  return response.sendStatus(404);
});