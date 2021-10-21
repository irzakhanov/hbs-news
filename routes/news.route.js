const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");

const router = Router();

router.get("/", newsController.getAllNews);
router.get("/:id", newsController.getNewsById);
router.get("/category/:categoryId", newsController.getNewsByCategory);
router.post("/", newsController.addNews);
router.patch("/:id", newsController.updateNews);
router.delete("/:id", newsController.deleteNews);

module.exports = router;
