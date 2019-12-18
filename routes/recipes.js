const express = require("express");
const router = express.Router();
const {
  recipeadd,
  reciperemove,
  reciperetreive
} = require("../models/recipes");

router.post("/retreive", async (req, res, next) => {
  const { account, token } = req.body;
  const response = await recipeadd(account, token);
  res.send(response);
});

router.post("/add", async (req, res, next) => {
  const { account, token, isbn } = req.body;
  const response = await reciperemove(account, token, isbn);
  res.send(response);
});

router.post("/remove", async (req, res, next) => {
  const { account, token, isbns } = req.body;
  const response = await reciperetreive(account, token, isbns);
  res.send(response);
});

module.exports = router;
