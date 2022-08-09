const express = require("express");
const needle = require("needle");
const bearer = process.env.BEARER_TOKEN;

const router = express.Router();

async function getRequest(username) {
  const url = `https://api.twitter.com/2/tweets/counts/recent?query=@${username}`;

  const res = await needle("get", url, {
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

router.get("/:username", async (req, res) => {
  const { username } = req.params;
  const response = await getRequest(username);
  const total  = response.meta.total_tweet_count
  res.json({ total });
});

module.exports = router;
