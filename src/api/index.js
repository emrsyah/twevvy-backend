const express = require('express');

const emojis = require('./emojis');
const twitterProfile = require('./twitterProfile');
const twitterCountRecent = require('./twitterCountRecent');
const tweetRecent = require('./tweetRecent');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/twitterProfile', twitterProfile);
router.use('/countRecent', twitterCountRecent);
router.use('/tweetRecent', tweetRecent);

module.exports = router;
