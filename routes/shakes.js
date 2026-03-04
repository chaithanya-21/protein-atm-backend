const express = require("express");
const router = express.Router();
const { calculateShake } = require("../controllers/nutritionController");

router.post("/calculate", calculateShake);

module.exports = router;
