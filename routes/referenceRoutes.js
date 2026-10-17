const express = require("express");
const router = express.Router();

const referenceController = require("../controllers/referenceController");

router.get("/", referenceController.getAll);
router.get("/:id", referenceController.getByID);
router.post("/", referenceController.add);
router.put("/:id", referenceController.update);
router.delete("/:id", referenceController.remove);

module.exports = router;