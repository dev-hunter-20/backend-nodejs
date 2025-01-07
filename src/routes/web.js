const express = require("express");
const { getHomePage, getImage } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.get("/dev", getImage);

module.exports = router;
