const express = require("express");
const needle = require("needle");
const bearer = process.env.BEARER_TOKEN;

const router = express.Router();

async function getRequest(maxTweet, tweetQuery) {
  const url = `https://api.twitter.com/2/tweets/search/recent`;
  const params = {
    "query": tweetQuery,
    "max_results": maxTweet,
    "user.fields": "profile_image_url",
    "tweet.fields": "author_id",
  };

  const res = await needle("get", url, params, {
    headers: {
      "User-Agent": "v2UserLookupJS",
      authorization: `Bearer ${bearer}`,
    },
  });

  if (res.body) {
    return res.body;
  } else {
    throw new Error("Unsuccessful request");
  }
}

router.get("/", async (req, res) => {
  const { maxTweets, tweetQuery } = req.body;
  const response = await getRequest(maxTweets, tweetQuery);
  res.json({ response });
});

module.exports = router;
