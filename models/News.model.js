const { Schema, model } = require("mongoose");

const newsSchema = Schema({
  title: String,
  text: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

const News = model("News", newsSchema);

module.exports = News;
