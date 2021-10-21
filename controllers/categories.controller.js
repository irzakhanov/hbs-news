const Category = require("../models/Category.model");

module.exports.newsController = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      return res.json(categories);
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
  addCategory: async (req, res) => {
    try {
      const category = await Category.create({
        name: req.body.name,
      });
      return res.json({ message: "Категория созданна", category });
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
  updateCategory: async (req, res) => {
    try {
      const category = await Category.findByIdAndUpdate(req.params.id, { name: req.body.name });
      return res.json({ message: "Категория изменена", category });
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const category = await Category.findByIdAndRemove(req.params.id);
      return res.json({ message: "Категория удалена", category });
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
};
