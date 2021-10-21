const { Router } = require("express");

const router = Router();

router.use("/users", require("./users.route"));
router.use("/categories", require("./categories.route"));
router.use("/news", require("./news.route"));
router.use("/comments", require("./comments.route"));

module.exports = router;
