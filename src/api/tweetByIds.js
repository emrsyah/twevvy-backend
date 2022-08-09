const express = require("express");
const needle = require("needle");
const bearer = process.env.BEARER_TOKEN;

const router = express.Router();

async function getRequest(ids) {
  const url = `https://api.twitter.com/2/tweets`;
  const params = {
    "ids": ids,
    "user.fields": "profile_image_url,verified",
    "tweet.fields": "author_id,public_metrics",
    "expansions" : "author_id"
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
  const { ids } = req.body;
  const response = await getRequest(ids);
  res.json({ response });
});

module.exports = router;
