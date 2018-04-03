'use strict';

const {Router} = require('express');
const jsonParser = require('body-parser').json();
const superagent = require('superagent');

const userRouter = (module.exports  = new Router());

userRouter.post('/signup', jsonParser, (request, response) => {
  //TODO: more validation based on object
  if(!request.body.email) {
    return new Error(400, `ERROR: email is required`);
  }
  //TODO: Refactor post to Convert Kit
  return superagent.post('convertkit.com/blah')
    .attach(request.body)
    .then( () => {
      return response.sendStatus(200);
    })
    .catch( () => {
      return response.sendStatus(500);
    });
});