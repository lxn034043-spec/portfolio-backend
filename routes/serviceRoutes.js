const express = require("express");
const router = express.Router();

const serviceController = require("../controllers/serviceController");

router.get("/", serviceController.getAll);
router.get("/:id", serviceController.getByID);
router.post("/", serviceController.add);
router.put("/:id", serviceController.update);
router.delete("/:id", serviceController.remove);

module.exports = router;