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
  const { account, token, title, recipe } = req.body;
  const response = await reciperemove(account, token, title, recipe);
  res.send(response);
});

router.post("/remove", async (req, res, next) => {
  const { account, token, id } = req.body;
  const response = await reciperetreive(account, token, id);
  res.send(response);
});

module.exports = router;
