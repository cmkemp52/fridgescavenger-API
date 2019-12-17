const db = require("./conn"),
  { tokenCheck } = require("../models/user");

recipeadd = async (account, token, title, recipe) => {
  try {
    const user = await tokenCheck(token, account);
    const id = user.id;

    db.none(`INSERT INTO recipes_id${id} (title, recipe) VALUES ($1, $2)`, [
      title,
      recipe
    ]);
  } catch (err) {
    return err;
  }
};

reciperemove = async (account, token, id) => {
  try {
    const user = await tokenCheck(token, account);
    db.none(`DELETE FROM recipes_id${user.id} WHERE id=${id};`);
  } catch (err) {
    return err;
  }
};

reciperetreive = async (account, token) => {
  try {
    const user = await tokenCheck(token, account);
    const response = await db.any(`SELECT * FROM recipes_id${user.id}`);
    return response;
  } catch (err) {
    return err;
  }
};

module.exports = {
  recipeadd,
  reciperemove,
  reciperetreive
};
