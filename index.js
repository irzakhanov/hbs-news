const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 5000;
const dbUrl = "mongodb+srv://gvardeez95:stalker95@products.yiuz2.mongodb.net/hbs_news_cump_db";

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.json());
app.use(require("./routes"));

const start = async () => {
  try {
    await mongoose.connect(dbUrl);

    app.listen(PORT, () => {
      console.log("Server started on port", PORT);
    });
  } catch (error) {
    console.log("Ошибка Сервера или БД", error);
  }
};

start();
