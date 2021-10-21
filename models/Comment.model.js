const { Schema, model } = require("mongoose");

const commentSchema = Schema({
  text: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  news: {
    type: Schema.Types.ObjectId,
    ref: "News",
  },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
