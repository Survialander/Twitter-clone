const express = require('express');

const routes = express.Router();

const TweetController = require('./controllers/TweetController.js');
const LikeController = require('./controllers/LikeController.js');

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.save);
routes.post('/likes/:id', LikeController.store);
routes.post('/unlike/:id', LikeController.unlike);

module.exports = routes;