const { Schema, model } = require("mongoose");

const userSchema = Schema({
  name: String,
});

const User = model("User", userSchema);

module.exports = User;
