const express = require("express");
const router = express.Router();
const {
  recipeadd,
  reciperemove,
  reciperetreive
} = require("../models/library");

router.post("/retreive", async (req, res, next) => {
  const { account, token } = req.body;
  const response = await libraryretreive(account, token);
  res.send(response);
});

router.post("/add", async (req, res, next) => {
  const { account, token, isbn } = req.body;
  const response = await libraryadd(account, token, isbn);
  res.send(response);
});

router.post("/remove", async (req, res, next) => {
  const { account, token, isbns } = req.body;
  const response = await libraryremove(account, token, isbns);
  res.send(response);
});

module.exports = router;
