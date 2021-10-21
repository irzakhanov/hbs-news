const Comment = require("../models/Comment.model");

module.exports.newsController = {
  getAllComments: async (req, res) => {
    try {
      const comments = await Comment.find();
      return res.json(comments);
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
  addComment: async (req, res) => {
    try {
      const comment = await Comment.create({
        text: req.body.text,
        user: req.params.userId,
        nes: req.params.newsId,
      });
      return res.json({ message: "Комментарий добавлен", Category });
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
  updateComment: async (req, res) => {
    try {
      const comment = await Comment.findByIdAndUpdate(req.params.id, { text: req.body.text });
      return res.json({ message: "Комментарий изменен", comment });
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
  deleteComment: async (req, res) => {
    try {
      const comment = await Comment.findByIdAndRemove(req.params.id);
      return res.json({ message: "Категория удалена", comment });
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
};
