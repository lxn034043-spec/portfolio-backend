const express = require("express");
const router = express.Router();

const projectController = require("../controllers/projectController");

router.get("/", projectController.getAll);
router.get("/:id", projectController.getByID);
router.post("/", projectController.add);
router.put("/:id", projectController.update);
router.delete("/:id", projectController.remove);

module.exports = router;