const User = require("../models/User.model");

module.exports.usersController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
  addUser: async (req, res) => {
    try {
      const user = await User.create({
        name: req.body.name,
      });
      return res.json({ message: "Пользователь создан", user });
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
};
