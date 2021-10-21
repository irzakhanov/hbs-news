const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller");

const router = Router();

router.get("/", commentsController.getAllComments);
router.post("/user/:userId/news/:newsId", commentsController.addComment);
router.patch("/:id", commentsController.updateComment);
router.delete("/:id", commentsController.deleteComment);

module.exports = router;
