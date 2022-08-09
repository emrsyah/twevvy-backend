const express = require('express');

const emojis = require('./emojis');
const twitterProfile = require('./twitterProfile');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/twitterProfile', twitterProfile);

module.exports = router;
