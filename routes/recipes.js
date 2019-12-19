const express = require("express");
const router = express.Router();
const {
  recipeadd,
  reciperemove,
  reciperetrieve
} = require("../models/recipes");

router.post("/retrieve", async (req, res, next) => {
  const { account, token } = req.body;
  const response = await reciperetrieve(account, token);
  res.send(response);
});

router.post("/add", async (req, res, next) => {
  const { account, token, recipename, recipeid, recipeimage } = req.body;
  const response = await recipeadd(account, token, recipename, recipeid, recipeimage);
  res.send(response);
});

router.post("/remove", async (req, res, next) => {
  const { account, token, id } = req.body;
  const response = await reciperemove(account, token, id);
  res.send(response);
});

module.exports = router;
