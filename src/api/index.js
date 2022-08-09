const express = require('express');
// TODO TAMBAHIN CORS

const twitterProfile = require('./twitterProfile');
const twitterCountRecent = require('./twitterCountRecent');
const tweetRecent = require('./tweetRecent');
const tweetByIds = require('./tweetByIds');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/twitterProfile', twitterProfile);
router.use('/countRecent', twitterCountRecent);
router.use('/tweetRecent', tweetRecent);
router.use('/tweetByIds', tweetByIds);

module.exports = router;
