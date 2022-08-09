const express = require("express");
const needle = require("needle");
const bearer = process.env.BEARER_TOKEN;

const router = express.Router();

async function getRequest(id) {
  const url = `https://api.twitter.com/2/tweets/${id}`;
  const params = {
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

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const response = await getRequest(id);
  res.json({ response });
});

module.exports = router;
