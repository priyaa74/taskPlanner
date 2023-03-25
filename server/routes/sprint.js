const express = require("express");
const { SprintTask, GetSprintTask } = require("../controller/sprint");
const isAuth = require("../middleware/authentication");
const router = express.Router();

router.post("/sprint", isAuth, SprintTask);
router.get("/", isAuth, GetSprintTask);

module.exports = router;