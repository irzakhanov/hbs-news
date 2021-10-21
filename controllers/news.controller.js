const News = require("../models/News.model");

module.exports.newsController = {
  getAllNews: async (req, res) => {
    try {
      const news = await News.find();
      return res.json(news);
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
  getNewsById: async (req, res) => {
    try {
      const news = await News.findById(req.params.id);
      return res.json(news);
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
  getNewsByCategory: async (req, res) => {
    try {
      const news = await News.find({ category: req.params.categoryId });
      return res.json(news);
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
  addNews: async (req, res) => {
    try {
      const news = await News.create({
        title: req.body.title,
        text: req.body.text,
        category: req.body.category,
      });
      return res.json({ message: "Новость созданна", news });
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
  updateNews: async (req, res) => {
    try {
      const news = await News.findByIdAndUpdate(req.params.id, { $set: req.body });
      return res.json({ message: "Новость изменена", news });
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
  deleteNews: async (req, res) => {
    try {
      const news = await News.findByIdAndRemove(req.params.id);
      return res.json({ message: "Новость удалена", news });
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
};
